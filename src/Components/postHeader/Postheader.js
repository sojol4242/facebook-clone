import { Avatar } from '@material-ui/core';
import React, { useState} from 'react';
import "./postheader.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase'
import db from '../../firebase'
const Postheader = () => {
      const[{ user }, dispatch] = useStateValue();


    const [input, setInput] = useState(``);
    const [imageUrl, setImageUrl] = useState(``);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageUrl,
            userName:user.displayName
            
})
        // some db stuff
    // console.log(input);
    //  setinput
        setInput("");

        // setImageUrl
        setImageUrl("");
    }

    return (
        <div className="post_header">
            <div className="post_header_top">
                <Avatar src={user.photoURL} className="post_header_top_avatar"/>
                <form>
                    <input  value={input} 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" placeholder="What's on your mind?"
                        className="post_header_input" />
                    <input
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        type="text" placeholder="image URL(Optional)" />
                    <button onClick={handleSubmit} type="submit">
                    
                    Hidden Submit
                </button>
                </form>
                
            </div>
            <div className="post_header_bottom">
                <div className="post_header_option">
                    <VideocamIcon style={{color:"red"} }/>
                    <h3>Live Video</h3>
               </div>
                <div className="post_header_option">
                    <PhotoLibraryIcon style={{color:"green"} }/>
                    <h3>Photos/Video</h3>
               </div>
                <div className="post_header_option">
                    <InsertEmoticonIcon style={{color:"yellow"} }/>
                    <h3>Feeling/Activity</h3>
               </div>

            </div>
        </div>
    );
};

export default Postheader;