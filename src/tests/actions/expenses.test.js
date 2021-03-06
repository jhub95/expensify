import {addExpense, startAddExpense, removeExpense, startRemoveExpense, editExpense, startEditExpense, setExpenses, startSetExpenses} from './../../actions/expenses';
import expenses from './../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from './../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'testUserID';
const defaultAuthState = { auth:{uid} };


beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id, description,note,amount, createdAt}) => {
        expensesData[id] = {description,note,amount,createdAt};
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done());
});


describe('expenses action file',()=>{
    test('should setup remove expese',()=>{
        const action = removeExpense('123abc');
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id:'123abc'
        });
    });

    test('should setup edit expese',()=>{
        const action = editExpense('123abc',{
            note:'new value'
        });
        expect(action).toEqual({
            type: 'EDIT_EXPENSE',
            id:'123abc',
            updates:{note:'new value'}
        });
    });

    test('should edit expense from firebase',(done)=>{
        const store = createMockStore(defaultAuthState);
        const id = expenses[0].id;
        const updates = {
            amount: 7777.77
        };
        store.dispatch(startEditExpense(id,updates)).then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });
            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        }).then((snapshot)=>{
            expect(snapshot.val().amount).toBe(updates.amount);
            done();
        });
    });

    test('should setup add expese',()=>{
        const action = addExpense(expenses[2]);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense:expenses[2]
        });
    });

    test('should add expense to db and store',()=>{
        const action = addExpense(expenses[2]);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense:expenses[2]
        });
    });

    test('should add expense with defaults to db and store',(done)=>{
        const store = createMockStore(defaultAuthState);
        const expenseData = {
            description: 'mouse',
            amount:3000,
            note:'better',
            createdAt: 1000
        };
        store.dispatch(startAddExpense(expenseData)).then(()=>{
           const actions = store.getActions();
           expect(actions[0]).toEqual({
               type: 'ADD_EXPENSE',
               expense: {
                   id: expect.any(String),
                   ...expenseData
               }
           });
           return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
        });
    });

    test('should setup add expense and get default values',(done)=>{
        const store = createMockStore(defaultAuthState);
        const expenseDefaults = {
            description: '',
            amount:0,
            note:'',
            createdAt: 0
        };
        store.dispatch(startAddExpense(expenseDefaults)).then(()=>{
           const actions = store.getActions();
           expect(actions[0]).toEqual({
               type: 'ADD_EXPENSE',
               expense: {
                   id: expect.any(String),
                   ...expenseDefaults
               }
           });
           return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
        });
    });

    test('should setup setExpense action object with data',()=>{
        const action = setExpenses(expenses);
        expect(action).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
    });

    // test('should fetch the expenses from firebase',(done)=>{
    //     const store = createMockStore({});
    //     store.dispatch(startSetExpenses())
    //     .then(()=>{
    //         const actions = store.getActions();
    //         expect(actions[0]).toEqual({
    //             type: 'SET_EXPENSES',
    //             expenses
    //         });
    //         done();
    //     });
    // });

    test('should remove expense from firebase',(done)=>{
        const store = createMockStore(defaultAuthState);
        const id = expenses[1].id;
        store.dispatch(startRemoveExpense(id))
         .then(()=>{
            database.ref(`users/${uid}/expenses/${id}`)
            .once('value',(snapshot)=>{
                const results = snapshot.val();
                expect(results).toBeFalsy();
                done();
            });

         });
    });
});
