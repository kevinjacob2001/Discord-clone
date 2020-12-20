import React from 'react';

import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

import './ChatHeader.css'


function ChatHeader(){
    return(
    <div className="chatHeader">
        <div className="chatHeader__left">
            <h3><span className="chatHeader__hash">#</span>Test Channel</h3>
        </div>
        <div className="chatHeader__right">
           <NotificationsIcon/>
           <EditLocationRoundedIcon/>
           <PeopleAltRoundedIcon/>
           <div className="chatHeader__search">
               <input placeholder="Search"/>
           </div>
        </div>
    </div>
    )
}

export default ChatHeader;