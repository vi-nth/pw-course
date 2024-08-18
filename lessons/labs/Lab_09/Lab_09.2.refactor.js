/**
 * 
url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts
9.1
Please using PROMISE and thenable to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
 */

const readline = require('readline-sync');
const url = 'https://jsonplaceholder.typicode.com/posts';

let userId = readline.question('User ID: ');
let postId = readline.question('Post ID: ');

printAllPostByUserId(userId);
printTargerPost(userId, postId);

function printAllPostByUserId(userId) {
    getFilteredPostsByUserId(userId).then(function (posts) {
        console.log(posts)
    });
}

async function printTargerPost(userId, postId) {
    const userPosts = await sendRequest(url);
    const targetPost = userPosts.filter(function (post) {
        return (post.id === parseInt(postId));
    })[0];

    if (targetPost && targetPost.userId === parseInt(userId)) {
        console.log(targetPost);
    } else {
        console.log(`The postId ${postId} is NOT existing for userID ${userId}`);
    }

}

async function getFilteredPostsByUserId(userId) {
    const userPosts = await sendRequest(url);
    return userPosts.filter(function (post) {
        return (post.userId === parseInt(userId));
    });
}

async function sendRequest(url) {
    const response = await fetch(url);
    return response.json();
}