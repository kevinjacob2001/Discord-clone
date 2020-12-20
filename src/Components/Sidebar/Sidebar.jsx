import React from 'react';
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar=()=>{
    return(
        <div className="sidebar">
            <h3>Sidebar component</h3>
            <div className="sidebar__top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon/>
            </div>
        </div>
    )
}


export default Sidebar;