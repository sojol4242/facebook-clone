import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import SideBarRow from '../sidebarrow/SideBarrow';
 
import "./sidebar.css"
const sidebar = () => {


    return (
        <div className="siderbar">
            <SideBarRow src="https://files.fm/thumb_show.php?i=qmzp7nszu" title="Md Moniruzzaman Sojol"/>
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

export default sidebar;