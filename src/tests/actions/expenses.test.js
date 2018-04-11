import {addExpense, removeExpense, editExpense} from './../../actions/expenses';

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
        const expenseData = {
            description:'yeah know',
            note:'what a high note',
            amount:45,
            createdAt:777777
        };
        const action = addExpense(expenseData);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id:expect.any(String)
            }
        });
    });
    test('should setup add expense and get default values',()=>{
        const action = addExpense({});
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                description:'',
                note:'',
                amount:0,
                createdAt:0,
                id:expect.any(String)
            }
        });
    });
});
