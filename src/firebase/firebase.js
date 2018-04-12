import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};











// let expenses = [
//     {
//         description:"breakfast",
//         amount:1200,
//         note: 'get a note 1',
//         createdAt: 4444
//     },{
//         description:"lunch",
//         amount:3400,
//         note: 'get a note 2',
//         createdAt: 4444
//     },{
//         description:"supper",
//         amount:5000,
//         note: 'get a note 3',
//         createdAt: 4444
//     }
// ];

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// });
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// });
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// });

// expenses.map((expense)=>{
//     database.ref('expenses').push(expense);
// });

// database.ref('expenses')
//     .on('value',(snapshot)=>{
//         let expenses = [];
//         snapshot.forEach(element => {
//             expenses.push({
//                 id:element.key,
//                 ...element.val()
//             });
//         });
//         console.log(expenses);
//     },(e)=>{
//         console.log(e);
//     })




// database.ref('firenotes/-L9t57HvoQvMNnYZjo66').update({
//     title:'updated from script by ID'
// });



// database.ref('firenotes').push({
//     title:'addednote'
// });



// const notes = [
//     {
//         id:'12',
//         title:'first note'
//     },{
//         id:'39384dkdk',
//         title:'second note'
//     }
// ];

// const fireNotes = {
    
//         '12':{
//             title:'first note'
//         },
//         '39384dkdk':{
//             title:'second note'
//         }
    
// };

// database.ref('firenotes').set(fireNotes);


// const onValueChange = database.ref()
//     .on('value',(snapshot)=>{
//         const data = snapshot.val();
//         console.log( `${data.name} is a ${data.job.title} at ${data.job.company}` )
//     },(e)=>{
//         console.log(e);
//     });

// turn off db change subscription
// database.ref().off(onValueChange);

// database.ref().set({
//     name: 'Justin Cathey',
//     age: 41,
//     job: {
//         title:'software dev',
//         company:'google'
//     },
//     stressLevel: 6,
//     location: {
//         work:{
//             city: 'boston',
//             country: 'usa'
//         },
//         home:{
//             city: 'austin',
//             country: 'texas'
//         }
//     }
// }).then(()=>{
//     console.log("data saved");
// }).catch((e)=>{
//     console.log("error: ",e)
// });

// database.ref('isSingle').remove();

// database.ref().update({
//     'job/company': 'amazon',
//     stressLevel: 9,
//     'location/work/city': 'seattle'
// }).then(()=>{

// }).catch((e)=>{
//     console.log("update error",e)
// });