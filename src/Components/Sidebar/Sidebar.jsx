import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';

import SidebarChannel from "../Sidebar_Channel/SidebarChannel";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Kevin Jacob</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      
      <div className="sidebar__voice">
          <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
          <div className="sidebar__voiceInfo">
              <h3>Voice Connected</h3>
              <p>Stream</p>
          </div>

          <div className="sidebar__voiceIcons">
              <InfoOutlinedIcon/>
              <CallIcon/>
          </div>
      </div>
      <div className="sidebar__profile">
          <Avatar src="data:image/jpeg;base64,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"/>
          <div className="sidebar__profileInfo">
              <h3>Kevin Jacob</h3>
              <p>#ThisIsID</p>
          </div>
          <div className="sidebar__profileIcons">
              <MicIcon/>
              <HeadsetIcon/>
              <SettingsIcon/>

          </div>
      </div>

    </div>
  );
};

export default Sidebar;
