import React from 'react';
import Story from '../Story/Story';
import "./storys.css"
const Storys = () => {
    return (
        <div className="storys">
            {/* Single story component */}
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc="https://files.fm/thumb_show.php?i=qmzp7nszu" title="Md Moniruzzaman Sojol"  className="story"/>
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc="https://files.fm/thumb_show.php?i=qmzp7nszu" title="Md Moniruzzaman Sojol"  className="story"/>
            <Story image="https://files.fm/thumb_show.php?i=qmzp7nszu" profileSrc="https://files.fm/thumb_show.php?i=fanhsbz8k" title="Md Moniruzzaman Sojol" className="story"/>          
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc="https://files.fm/thumb_show.php?i=qmzp7nszu" title="Md Moniruzzaman Sojol" className="story"/>
            <Story image="https://files.fm/thumb_show.php?i=fanhsbz8k" profileSrc="https://files.fm/thumb_show.php?i=qmzp7nszu" title="Md Moniruzzaman Sojol" className="story"/>
                    
            {/* this is story Components */}
        </div>
    );
};

export default Storys;