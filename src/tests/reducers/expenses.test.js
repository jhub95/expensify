import {expensesReducer} from './../../reducers/expenses';
import expenses from './../fixtures/expenses';


describe('from reducers/expenses file',()=>{
    test('should set default state',()=>{
        const state = expensesReducer(undefined, {type:'@@INIT'});
        expect(state).toEqual([]);
    });

    test('should removed expense by ID',()=>{
        const action = {
            type: "REMOVE_EXPENSE",
            id: expenses[1].id
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([
            expenses[0], expenses[2]
        ]);
    });

    test('should not remove expense if ID is not found',()=>{
        const action = {
            type: "REMOVE_EXPENSE",
            id: '-1'
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });

    test('should add expense',()=>{
        const newExpense = {
            amount:555555,
            createAt: '4444',
            id:999,
            description: 'new car',
            note:''
        };
        const action = {
            type:'ADD_EXPENSE',
            expense:newExpense
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses.concat(newExpense));
    });

    test('should edit an expense',()=>{
        const updates = {
            amount:5555556,
            description: 'rent again',
            note:'new note',
            id:2,
            createdAt:0
        };
        const action = {
            type:'EDIT_EXPENSE',
            id:2,
            updates
        };
        const state = expensesReducer(expenses, action);
        expect(state[1]).toEqual(updates);
    });

    test('shoud not edit if ID not found',()=>{
        const updates = {
            amount:5555556,
            description: 'rent again',
            note:'new note',
            id:-1,
            createdAt:0
        };
        const action = {
            type:'EDIT_EXPENSE',
            id:-1,
            updates
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });

    test('should set expenses',()=>{
        const action = {
            type: 'SET_EXPENSES',
            expenses: [expenses[1]]
        };
        const state = expensesReducer(expenses,action);
        expect(state).toEqual([expenses[1]])
    });

});