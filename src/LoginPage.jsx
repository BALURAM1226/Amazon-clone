import React,{ useState} from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import {auth} from './firebase';
export default function LoginPage(){
 
 const [email, setEmail] = useState('');
 const [password,setPassword] = useState('');
  
  const signIn = e =>{
    e.preventDefault();
  }
  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth) => {
        alert("register successfully");
    }).catch((err) =>{
      alert(err);
    });

  }


  return(
    <div className="login">

    <Link to="/">
    <img  className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo"/>
    </Link>

    <div className="login_container">
       <h1>Sign-In</h1>

      <form action="">

        <h5>E-mail</h5>
        <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>

        <h5>Password</h5>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

      <button onClick={signIn} className="signIn_btn">Sign In</button>

      </form>

       <p>
       By signing-in you agree to the  Amazon Clone Conditions of use & Sale, Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ad Notice
        </p>
      <button onClick={register} className="register_btn">Create an Account</button>


    </div>

    
    </div>

  )
}