import database from './../firebase/firebase';




// database.ref('expenses').once('value',(snapshot)=>{
//     const expenses =[];
    
//     snapshot.forEach(element => {
//         expenses.push({
//             id:element.key,
//             ...element.val()
//         });
//     });
//     console.log(expenses);
//     const id = expenses[1].id;
//     database.ref(`expenses/${id}`).remove();


// });