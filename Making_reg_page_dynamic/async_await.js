console.log('Person 1 : shows the ticket');
console.log('Person 2 : shows the ticket');

//execute below code without async method
// const wifeBringingTicks = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('ticket');
//         },3000)
// })
// }
// const getPopcorn = 
//     wifeBringingTicks().then((t)=>{
//         console.log(`Wife : I have the ${t}`);
//         console.log(`Husband : we should go in`);
//         console.log(`Wife : I am hungry`);
//         return new Promise( (resolve,reject)=>{resolve('Popcorn');} )
//     })

// const getButter = getPopcorn.then(
//     (t)=>
//     {
//         console.log('Husband : I got some popcorns');
//         console.log(`Husband : we should go in`);
//         console.log(`Wife : I want butter on my popcorn`);
//         return new Promise((resolve,reject)=>resolve('butter'));
//     });
//     getButter.then(
//         (t)=>console.log(t)
//     );

//execute same code with async method

const preMovie = async()=>{
    const wifeBringingTicks = 
            new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve('ticket');
                },3000)
        });
        let ticket = await wifeBringingTicks;
        console.log(`Wife : I have the ${ticket}`);
        console.log(`Husband : we should go in`);
        console.log(`Wife : I am hungry`);

        const getPopcorn = new Promise( (resolve,reject)=>{resolve('Popcorn');} );
        let popcorn = await getPopcorn;

        console.log(`Husband : I got some ${popcorn}`);
        console.log(`Husband : we should go in`);
        console.log(`Wife : I want butter on my popcorn`);

        const getButter = new Promise((resolve,reject)=>resolve('butter'));

        let butter = await getButter;
        
        console.log(`Husband : I got some ${butter}`);
        console.log(`Wife : Lets go`);

        return ticket;
}
preMovie().then((m)=>console.log(m));
console.log('Person 4 : shows the ticket');
console.log('Person 5 : shows the ticket');