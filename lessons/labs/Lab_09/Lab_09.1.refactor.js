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
    })
}

function printTargerPost(userId, postId) {
    getFilteredPostsByUserId(userId).then(function (userPosts) {
        const targetPost = userPosts.filter(function (post) {
            return (post.id === parseInt(postId));
        })[0];

        if (targetPost && targetPost.userId === parseInt(userId)) {
            console.log(targetPost);
        } else {
            console.log(`The postId ${postId} is NOT existing for userID ${userId} `);
        }
    });
}

function getFilteredPostsByUserId(userId) {
    return sendRequest(url).then(function (posts) {
        return posts.filter(function (post) {
            return (post.userId === parseInt(userId));
        });
    });
}

function sendRequest(url) {
    return fetch(url).then(function (response) {
        return response.json();
    });
}