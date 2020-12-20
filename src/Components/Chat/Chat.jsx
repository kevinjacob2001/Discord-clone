import React,{useState,useEffect} from 'react';

import './Chat.css'
import db from '../firebase';
import firebase from 'firebase'
import {useSelector} from 'react-redux'

import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';


import ChatHeader from '../ChatHeader/ChatHeader';
import Message from '../Message/Message'
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectchannelName } from '../features/appSlice';

function Chat(){
    const user=useSelector(selectUser)
    const channelId=useSelector(selectChannelId)
    const channelName=useSelector(selectchannelName)
    
    const [input,setInput]=useState(" ")
    const [messages,setMessages]=useState([])

    useEffect(() => {
        if(channelId){
         db.collection("channels")
             .doc(channelId)
             .collection("messages")
             .orderBy("timestamp","desc")
             .onSnapshot((snapshot) => 
             setMessages(snapshot.docs.map((doc) => doc.data()))
             );
        }
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();
 
         db.collection("channels").doc(channelId).collection("messages").add({
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             message:input,
             user:user,
         });
        setInput("");
    };

    return(
        <div className="chat">
            <ChatHeader channelName={channelName}/>

            <div className="chat__message">
            {messages.map((message) => 
                   <Message  
                        timestamp={message.timestamp} 
                        message={message.message} 
                        user={message.user} 
                    />
               )}
               
               
            </div>
            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large"/>
                <form>
                    <input 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)} 
                    placeholder={`Message ${channelName}`}
                    disabled={!channelId}
                    />
                    <button onClick={sendMessage} disabled={!channelId} className="chat__inputButton" type="submit"> Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>

                </div>
            </div>
        </div>
    )
}

export default Chat;