import React from "react";
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

// import {firebase, googleAuthProvider} from './../firebase/firebase';

export const LoginForm = ({startLogin})=>{
    return (
        <div>
        <h1>Please login to see your expenses.</h1>
            <form>
                <input 
                    type='text' 
                    id='login_name'
                    name='login_name' 
                    placeholder="username"
                />
                <input 
                    type="password" 
                    id='password' 
                    name='password'
                    placeholder="password"
                />
                
            </form>
            <button id='loginButton' onClick={startLogin}>Login</button>
        </div>
    );

};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginForm);