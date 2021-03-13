import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Avatar,IconButton } from '@material-ui/core';
 import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { useStateValue } from '../StateProvider';

const Header = () => {

     const[{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="left_header">
               <img src="https://img.icons8.com/cute-clipart/50/000000/facebook-new.png" alt=""/>
                <div className="header_input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search on Facebook"/>
               </div>
            </div>
            <div className="center_header">
                <div className="header_icons header_icon_active">
                    <HomeIcon/>
                </div>
                <div className="header_icons">
                    <FlagIcon/>
                </div>
                <div className="header_icons">
                    <SubscriptionsIcon/>
                </div>
                <div className="header_icons">
                    <StorefrontIcon/>
                </div>
                <div className="header_icons">
                    <SupervisedUserCircleIcon/>
                </div>
                

            </div>
            <div className="right_header">
                <div className="header-info">
                    
                       <IconButton>
                   <Avatar src={user.photoURL}/> 
              </IconButton>
                    <h4>{ user.displayName}</h4>
                </div>
                <IconButton>
                    < AddSharpIcon/>
              </IconButton>
                <IconButton>
                    < ForumSharpIcon/>
              </IconButton>
                <IconButton>
                    <ExpandMoreSharpIcon/>
              </IconButton>
                <IconButton>
                    < NotificationsNoneSharpIcon/>
              </IconButton>
            </div>
        </div>
    );
};

export default Header;