import React from "react";
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

// import {firebase, googleAuthProvider} from './../firebase/firebase';

export const LoginForm = ({startLogin})=>{
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h2 className="box-layout__title">Please login to see your expenses.</h2>
                <button id='loginButton' className="button" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    );

};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginForm);