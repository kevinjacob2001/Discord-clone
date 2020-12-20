import React from 'react';
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar=()=>{
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Kevin Jacob</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                
            </div>
        </div>
    )
}


export default Sidebar;