import authReducer from './../../reducers/auth';

describe('from reducers/auth file',()=>{

    test('should properly return login from reducer',()=>{
        const uid = 'lksd8jsdf';
        const action = {
            type: 'LOGIN',
            uid: uid
        };
        const reducer = authReducer({},action);
        expect(reducer).toEqual({
            uid:uid
        });
    });

    test('should properly return logout from reducer',()=>{
        const action = {
            type: 'LOGOUT'
        };
        const reducer = authReducer({uid:'aything'},action);
        expect(reducer).toEqual({});
    });

});