import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const { user, providerLogin, logOut } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const googleButton = () => {
    console.log('clicked');
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => {
        console.error(err);
      })
  }
  const handleSignOut = () => {
    console.log('clicked');
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <p>this is login page</p>
      {
        user?.uid ? <>
          <Button onClick={handleSignOut}>Logout</Button>

        </> : <><Button onClick={googleButton}>Login with google</Button></>
      }

    </div>
  );
};

export default Login;