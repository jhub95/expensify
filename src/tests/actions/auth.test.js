import { login, logout } from './../../actions/auth';


describe('from actions/auth file',()=>{

    test('should properly call login action',()=>{
        const uid = 'ksdklasdids9';
        const action = login(uid);
        expect(action).toEqual({
            type: 'LOGIN',
            uid: uid
        });
    });

    test('should properly call logout action',()=>{
        const action = logout();
        expect(action).toEqual({
            type: 'LOGOUT'
        });
    });

});
