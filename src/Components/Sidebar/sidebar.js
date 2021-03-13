import React from 'react';
import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
 
import SideBarRow from '../sidebarrow/SideBarrow';
import { useStateValue } from '../StateProvider';
import "./sidebar.css"
const Sidebar = () => {
   const[{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow src={user.photoURL} title={user.displayName}/>
            <SideBarRow src="" Icon={LocalHospital} title="COVID-19 Information Center"/>
            <SideBarRow src="" Icon={EmojiFlags} title="Pages"/>
            <SideBarRow src="" Icon={People} title="Friends"/>
            <SideBarRow src="" Icon={Chat} title="Messenger"/>
            <SideBarRow src="" Icon={Storefront} title="Marketplaces"/>
            <SideBarRow src="" Icon={VideoLibrary} title="Videos"/>
            <SideBarRow src="" Icon={ExpandMore} title="See more"/>
        </div>
    );
};

export default Sidebar;