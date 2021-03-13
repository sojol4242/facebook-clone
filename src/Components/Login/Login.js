import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import "./Login.css";
import {useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function LogIn  ()  {
    const [state, dispatch] = useStateValue();
    const signin = () => {
        
         auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => {
                alert(error.message);
            })
    };
    return (
       <div className="login"> 
            <div className="login-logo">
         <img src="https://files.fm/thumb.php?i=dsbwz2h8a" alt="brandlogo" className="brandlogo"/>
          <img src="https://files.fm/thumb.php?i=9v2pnszwt" alt="letterlogo" className="letterlogo"/>
            </div>
            <Button type="submit" onClick={signin}>
  Sign In
</Button>
        </div>
    );
};

export default LogIn;