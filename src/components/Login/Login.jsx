import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebasenit';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loginuser = result.user;
        console.log(loginuser);
        setUser(loginuser);
      })
      .catch(error => {
        console.log('error', error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, gitProvider)
      .then(result => {
        const loginuser = result.user;
        console.log(loginuser);
        setUser(loginuser);
      })
      .catch(error => {
        console.log('error', error.message);
      });
  };

  return (
    <div>
      {user ? (
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          onClick={handleSignOut}
        >
           Sign Out
        </button>
      ) : (
        <div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={handleGoogleAuth}
          >
            Google Login
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            onClick={handleGithubLogin}
          >
            GitHub Login
          </button>
        </div>
      )}

      {user && (
        <div>
          <h2>
            User: {user.displayName}
            <img src={user.photoURL} alt="" />
          </h2>
        </div>
      )}
    </div>
  );
};

export default Login;
