const d = new Date(); //current timestamp
let posts = [
{ title : 'Post one', body: 'this is post one'},
{ title : 'Post two', body: 'this is post two'}
];

const myFunc = async()=>{

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
function createPost (post){
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
    
    await getPosts();
    //create third post and delete all the posts one by one 
    await createPost({title : 'Post three', body:'This is post three'});
    await getPosts();
    try{
        await deletePost();
        await getPosts();
        await deletePost();
        await getPosts();
        await deletePost();
        await getPosts();
        deletePost();
    }
    catch(e){
        console.log(`${e}`);
    }
};

myFunc();





