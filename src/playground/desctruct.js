// object destructuring
// const person = {
//     // name: 'Andrew',
//     age: 27,
//     location: {
//         city:"boston",
//         temp:69
//     }
// };

// const {name:firstname='justin',age} = person;

// console.log(`${firstname} is ${age}`);


// const {city,temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

// array destructoring
const address = [
    '300 Grove Ln.',
    'Boston',
    'Mass',
    '01507'
];

const [,city,state='Nevada'] = address;

console.log(`You are in ${city} ${state}`)