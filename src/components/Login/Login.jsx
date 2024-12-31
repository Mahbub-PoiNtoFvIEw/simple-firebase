import { useState } from "react";
import app from "../../firebase/firebase.init";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedInUser = result.user;
            console.log('user', loggedInUser);
            setUser(loggedInUser)
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }
    const handleGitHubSignin = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }

    const handleSignout = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            {/* user ? signout : signIn */}
            {
                user ?
                <button onClick={handleSignout}>Sign Out</button>
                :
                <>
                    <button onClick={handleGoogleSignin}>Google Login</button>
                    <button onClick={handleGitHubSignin}>GitHub Login</button>
                </>
            }
            {
                user && <div>
                    <img src={user?.photoURL} alt="" />
                    <h2>user Name : {user?.displayName}</h2>
                    <p>Email : {user?.email}</p>
                </div>
            }
        </div>
    );
};

export default Login;