const expensesReducerDefaultState=[];

export const expensesReducer = (
    state=expensesReducerDefaultState, 
    {type,expense,id,updates,expenses}=action
) =>{
    switch (type) {
     case 'ADD_EXPENSE':
        return [
            ...state,
            expense
        ];
     case 'REMOVE_EXPENSE':
        return state.filter((tempExpense)=>tempExpense.id !== id);
     case 'EDIT_EXPENSE':
        return state.map((expense)=>{
           if (expense.id === id){
            return {
                ...expense,
                ...updates
            };
           } else {
               return expense;
           }
        });
     case 'SET_EXPENSES':
        return expenses;
     default:
        return state;
    }
};