const d = Date.now(); //current timestamp
let posts = [
{ title : 'Post one', body: 'this is post one',createdAt:Date.now()},
{ title : 'Post two', body: 'this is post two',createdAt:Date.now()}
];
//save timestamp of each post in local storage

    posts.forEach((post)=>{
        setTimeStamp(post);
    });

function setTimeStamp(post){
    if(!localStorage.getItem(post.title)){ //set Timestamp only once in localstorage to avoid overwriting the values
        postObj = {
            title : post.title,
            timestamp : post.createdAt
        }
        postObj = JSON.stringify(postObj);
        localStorage.setItem(post.title, postObj);
    }   
}

//function to get all the posts
function getPosts(){
    setTimeout( () =>
    {   let output = '';
        posts.forEach((post,index) => {
            const currPost = JSON.parse(localStorage.getItem(post.title)); //get timestamp of the post when it was created
            let postCreatedAt =  Math.floor((Date.now() - currPost.timestamp)/1000);
            output += `<li>${post.title} created ${postCreatedAt} secoonds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

//function to create post
function createPost(post,callBack){
setTimeout(() => {
    post.createdAt = Date.now(); //set created at timestamp for the post
  posts.push(post);
  setTimeStamp(post); //store the created at timestamp in local storage 
  callBack();  
}, 2000);
};
//function to create 4th post
function create4thPost(post,callBack){
    setTimeout(()=>{
        callBack(post);
    },1000);
}
//function which will show last edited in seconds ago for each post after every second
function lastEditedInSecondsAgo(){
    setInterval(()=>{
        getPosts();
    },1000)
}
getPosts();
createPost({title : 'Post three', body:'This is post three'}, getPosts);
create4thPost({title : 'Post four', body:'This is post four'}, createPost );
lastEditedInSecondsAgo();

