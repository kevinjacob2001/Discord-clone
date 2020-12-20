import React from 'react';

import './Chat.css'

import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';


import ChatHeader from '../ChatHeader/ChatHeader';
import Message from '../Message/Message'

function Chat(){
    return(
        <div className="chat">
            <ChatHeader/>

            <div className="chat__message">
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
            </div>
            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large"/>
                <form>
                    <input placeholder={`Message #TESTCHANNEL`}/>
                    <button className="chat__inputButton" type="submit"> Send Message</button>
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