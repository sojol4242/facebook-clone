import React from 'react';
import { useStateValue } from '../StateProvider';
import Story from '../Story/Story';
import "./storys.css"
const Storys = () => {
      const[{ user }, dispatch] = useStateValue();
    return (
        <div className="storys">
            {/* Single story component */}
            {/* src="https://source.unsplash.com/user/erondu/1600x900" */}
            <Story image="https://source.unsplash.com/weekly?water" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
            <Story image="https://source.unsplash.com/weekly?pain" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
            <Story image="https://source.unsplash.com/weekly?books" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
            <Story image="https://source.unsplash.com/weekly?code" profileSrc={user.photoURL} title={user.displayName}  className="story"/>
           
                    
            {/* this is story Components */}
        </div>
    );
};

export default Storys;