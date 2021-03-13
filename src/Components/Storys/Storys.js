import React from 'react';
import { useStateValue } from '../StateProvider';
import Story from '../Story/Story';
import "./storys.css"
const Storys = () => {
      const[{ user }, dispatch] = useStateValue();
    return (
        <div className="storys">
            {/* Single story component */}
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
           
                    
            {/* this is story Components */}
        </div>
    );
};

export default Storys;