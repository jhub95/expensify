import {createStore} from 'redux';

// action generators
const incrementCount = ({incrementBy=1}={})=>({
    type: 'INCREMENT',
    incrementBy: incrementBy
});
const decrementCount = ({decrementBy=1}={})=>({
    type: 'DECREMENT',
    decrementBy: decrementBy
});
const setCount = ({count}={})=>({
    type: 'SET',
    count: count
});
const resetCount = ()=>({
    type: 'RESET'
});

//Reducers
// 1. are pure functions -> it doesn't rely on any data other than what is passed in
// 2. never change state or action, just return a value


const countReducer = (state = {count: 0},
    {type,count,incrementBy,decrementBy}=action
)=>{
// const {count,incrementBy} = action;
switch(type){
 case 'INCREMENT':
    return {
        count: state.count + incrementBy
    };
 case 'DECREMENT':
    return {
        count: state.count - decrementBy
    };
 case 'SET':
    return {
        count: count
    }
 case 'RESET':
    return {
        count: 0
    };
 default:
        return state;
}

};



const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(
    incrementCount({
        incrementBy:5
    })
);

store.dispatch(
    resetCount()
);

store.dispatch(
    decrementCount({
        decrementBy: 10
    })
);

store.dispatch(
    setCount({
        count: 101
    })
);
