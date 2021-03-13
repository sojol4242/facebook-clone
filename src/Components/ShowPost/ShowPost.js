import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Showpost.css'
const ShowPost = ({profilePic,image,userName,timestamp,message}) => {
    return (
        <div className="showpost">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_top_info">
                    <h3>{userName}</h3>
                    <p>{timestamp}</p>

                </div>
                </div>
                  <div className="post_bottom">
                    <p>This is first post <br/>
                        {message} </p>
                </div>
                <div className="post_image">
                    <img src={image} alt=""/>
                </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                
                <div className="post_option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
               
                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
                </div>
              
          </div>
       
    );
};

export default ShowPost;