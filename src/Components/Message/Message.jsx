import React from 'react'
import './Message.css';
import {Avatar} from '@material-ui/core';

function Message({timestamp, message, user}) {
    return (
        <div className="message">
            <Avatar  src={user?.photo}/>
            <div className="message_info">
                <h4 style={{marginLeft:"5px"}}>
                    {user?.displayName}
                    <span style={{fontSize:"smaller",marginLeft:"10px"}} className="message_timestamp"> 
                        {new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message