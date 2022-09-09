const d = new Date(); //current timestamp
let posts = [
{ title : 'Post one', body: 'this is post one'},
{ title : 'Post two', body: 'this is post two'}
];

//function to get all the posts
function getPosts(){
    setTimeout( () =>
    {   let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

//function to create post
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
              return resolve(post);
            }
            else{
              return reject('Error: something went wrong');
            }
          }, 2000);
    }
    );

};

//function to delete last post from the array -Q.2
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = false;
            if(posts.length!==0){
                posts.pop();
            }
            else{
                error = true;
            }
            if(!error){
              resolve();
            }
            else{
              reject('Error: Array is empty');
            }   
        } , 1000
        );
    })  
}

//object which stores username and last activity time
const userDetails = {
    user : 'Sarvesh',
    lastActivityTime : `${d.getHours()}:${d.getMinutes()}`
}

console.log("Last activity time before creating a post",userDetails.lastActivityTime);

// update user's last activity time
function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            userDetails.lastActivityTime = `${d.getHours()}:${d.getMinutes()}`;
            resolve(userDetails.lastActivityTime);
        },1000);
    })
}

getPosts(); //display all available posts

//create third post and delete all the posts one by one to display error message when deleting post from empty array
createPost({title : 'Post three', body:'This is post three'}).then(
    ()=>
    {
        getPosts();
        // call function to delete post
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                // createPost({title : 'Post four', body:'This is post four'})
                // .then(()=> {
                //     getPosts();
                //     deletePost().then(()=>{
                //         getPosts();
                //         deletePost().then(()=>{
                //             getPosts();
                //         }).catch(err=>console.log(err));
                //     }).catch(err => console.log(err));  
                }).catch(err => console.log(err));

                //create post five
                let createPromise = createPost({title : 'Post five', body:'This is post five'});

                createPromise.then(()=>{
                    getPosts();    
                })
                .catch(err=>console.log(err)); 

                //update last activity time parallely
                let updatePromise = updateLastActivityTime();

                //create post six
                let createPromise1 = createPost({title : 'Post Six', body:'This is post six'});

                createPromise1.then(()=>{
                    getPosts();    
                })
                .catch(err=>console.log(err)); 
                
                //update last activity parallely
                let updatePromise1 = updateLastActivityTime(); 
 
                //when both promises resolved for post six then console log all the posts
                Promise.all([createPromise1,updatePromise1])
                .then(
                    (values)=>{
                        console.log("All created post with last activity time");  
                        posts.forEach((post)=>{
                            console.log(post);
                        });
                                              
                        console.log(`Last activity time: ${values[1]}`); 
                        //delete last post and console log remaining posts
                        deletePost().then(()=>{
                            getPosts();
                            console.log("New set of posts after deleting last post");
                            posts.forEach((post)=>{
                                console.log(post);
                            });
                        }).catch(err=>console.log(err));
                    }   
                ).catch(err=>console.log(err));             


        }).catch(err=>console.log(err));   
        }).catch(err=>console.log(err));       
    // }).catch(err=>console.log(err));
    }
)

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
// {
// setTimeout(resolve,2000,'GoodBye');
// });


// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));



