import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'

import SidebarChannel from "../Sidebar_Channel/SidebarChannel";

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
      </div>
    </div>
  );
};

export default Sidebar;