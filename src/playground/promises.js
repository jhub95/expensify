

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('this is resolved data');
        reject("something is wrong")
    },3000)
    
});
console.log('before');

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});