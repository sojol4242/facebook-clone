import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebarrow.css'
const SideBarRow = ({src,Icon,title}) => {
    return (
        <div className="siderbar-row">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{ title}</h4>
        </div>
    );
};

export default SideBarRow;