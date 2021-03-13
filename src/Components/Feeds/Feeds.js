import React, { useEffect, useState } from 'react';
import Postheader from '../postHeader/Postheader';
import ShowPost from '../ShowPost/ShowPost';
import { useStateValue } from '../StateProvider';
import Storys from '../Storys/Storys';
import db from "../../firebase"

import './feeds.css'
const Feeds = () => {
    const [{ user }, dispatch] = useStateValue();

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))))
    },[])




    return (
        <div className="feeds">
            {/* Story component */}
            <Storys />
            {/* Post header Component */}

            <Postheader/>
          

            {/* Show post component */}

            {/*
            hardcoded post:
            <ShowPost profilePic= {user.photoURL} 
                image="https://files.fm/thumb.php?i=5qs9hf4tk"
                userName={user.displayName}
                timestamp="3:08AM"
                message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore itaque, nihil harum enim porro necessitatibus quos perferendis! Ipsa deleniti fugit molestias. Reiciendis iusto cum consequuntur facilis minima facere voluptates."
            />
          
            <ShowPost profilePic= {user.photoURL} 
                image="https://files.fm/thumb.php?i=5qs9hf4tk"
                userName={user.displayName}
                timestamp="3:08AM"
                message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore itaque, nihil harum enim porro necessitatibus quos perferendis! Ipsa deleniti fugit molestias. Reiciendis iusto cum consequuntur facilis minima facere voluptates."
            />
          
            <ShowPost profilePic= {user.photoURL} 
                image="https://files.fm/thumb.php?i=5qs9hf4tk"
                userName={user.displayName}
                timestamp="3:08AM"
                message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore itaque, nihil harum enim porro necessitatibus quos perferendis! Ipsa deleniti fugit molestias. Reiciendis iusto cum consequuntur facilis minima facere voluptates."
            />
          
            <ShowPost profilePic= {user.photoURL} 
                image="https://files.fm/thumb.php?i=5qs9hf4tk"
                userName={user.displayName}
                timestamp="3:08AM"
                message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore itaque, nihil harum enim porro necessitatibus quos perferendis! Ipsa deleniti fugit molestias. Reiciendis iusto cum consequuntur facilis minima facere voluptates."
            />
           */}
            
            {
                posts.map((post) => (
                    <ShowPost
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        image={post.data.image}
                        userName={post.data.userName}
                        timestamp={post.data.timestamp}                     
                        message={post.data.message}
                    />
                ))
           }  
        </div>
    );
};

export default Feeds;