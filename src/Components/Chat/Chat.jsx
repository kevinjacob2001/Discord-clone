import React from 'react';

import './Chat.css'

import ChatHeader from '../ChatHeader/ChatHeader';

function Chat(){
    return(
        <div className="chat">
            <ChatHeader/>

            <div className="chat__message">

            </div>
            <div className="chat__input">
                
            </div>
        </div>
    )
}

export default Chat;