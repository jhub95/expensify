import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';

import {login, logout} from './actions/auth';
import AppRouter, {history} from './routers/AppRouter';
import {startSetExpenses} from './actions/expenses';
import {Provider} from 'react-redux';

import {firebase} from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import LoadingPage from './components/LoadingPage';
// import './playground/firebase';

const store = configureStore();

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if (history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        console.log('logged out');
        renderApp();
        history.push('/');
    }
});