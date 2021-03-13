import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase';
import './login.css'
// import db from './Firebase';


const Login = () => {

    const signin = (e) => {
    console.log("Singed in",e);
        auth.signInWithPopup(provider)
            .then(result => {
            console.log(result.user);
            }).catch(error => {
                alert(error.message);
        })
}

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

export default Login;