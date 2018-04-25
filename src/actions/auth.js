import {firebase, googleAuthProvider} from './../firebase/firebase';

export const login = (uid) => {
    console.log('auth action called with uid: ',uid);
    return ({
        type: 'LOGIN',
        uid
    })
};

export const startLogin = () => {
    console.log('login button clicked');
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    console.log('logout button clicked');
    return ()=>{
        return firebase.auth().signOut();
    }
};