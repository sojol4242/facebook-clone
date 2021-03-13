import React from 'react';
import Postheader from '../postHeader/Postheader';
import ShowPost from '../ShowPost/ShowPost';
import Storys from '../Storys/Storys';

import './feeds.css'
const Feeds = () => {
    return (
        <div className="feeds">
            {/* Story component */}
            <Storys />
            {/* Post header Component */}

            <Postheader/>
          

            {/* Show post component */}

            <ShowPost profilePic= "https://files.fm/thumb_show.php?i=qmzp7nszu" 
                image="https://files.fm/thumb.php?i=5qs9hf4tk"
                userName="Md Moniruzzaman Sojol"
                timestamp="3:08AM"
                message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore itaque, nihil harum enim porro necessitatibus quos perferendis! Ipsa deleniti fugit molestias. Reiciendis iusto cum consequuntur facilis minima facere voluptates."
            />
            <ShowPost profilePic= "https://files.fm/thumb_show.php?i=qmzp7nszu" 
                image="https://files.fm/thumb.php?i=tfsntvej5"
                userName="Md Moniruzzaman Sojol"
                timestamp="3:11AM"
                message="this is 2nd post \n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore itaque, nihil harum enim porro necessitatibus quos perferendis! Ipsa deleniti fugit molestias. Reiciendis iusto cum consequuntur facilis minima facere voluptates."
            />
            
             
        </div>
    );
};

export default Feeds;