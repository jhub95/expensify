import {addExpense, startAddExpense, removeExpense, editExpense} from './../../actions/expenses';
import expenses from './../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from './../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
        const store = createMockStore({});
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
           return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
        });
    });

    test('should setup add expense and get default values',(done)=>{
        const store = createMockStore({});
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
           return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
        });
    });
});
