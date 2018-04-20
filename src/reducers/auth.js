export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('login auth reducer called for uid: ', action.uid);
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            console.log('logout auth reducer called');
            return {};
        default:
            return state;
    }
};