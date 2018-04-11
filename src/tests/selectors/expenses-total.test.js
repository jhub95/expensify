import getExpensesTotal from './../../selectors/expenses-total';
import expenses from './../fixtures/expenses';

describe('from selectors/expenses-total',()=>{

    test('should return 0 if no expenses',()=>{
        const total = getExpensesTotal([]);
        expect(total).toBe(0);
    });

    test('should return proper sum for one expense',()=>{
        const total = getExpensesTotal([expenses[0]]);
        expect(total).toBe(195);
    });

    test('should return proper sum for multiple expenses',()=>{
        const total = getExpensesTotal(expenses);
        expect(total).toBe(114195);
    });

});