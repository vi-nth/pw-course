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
const url = 'https://jsonplaceholder.typicode.com';
const slug = 'posts';

const userId = readline.question('User ID: ');
const postId = readline.question('Post ID: ');

// get all posts by user id
const endPointUrl = url + "/" + slug;
fetch(endPointUrl)
    .then(getResponse)
    .then(objectList => getAllPostsContent(objectList, userId));

function getResponse(response) {
    console.log("End point url: " + endPointUrl);
    return response.json();
}

function getAllPostsContent(objectList, userId) {
    const myPostContents = Array.from(objectList);

    let allPosts = [];
    for (const myPostContent of myPostContents) {
        if (myPostContent.userId == userId) {
            allPosts.push(JSON.stringify(myPostContent));
        }
    }
    console.log("All posts: " + allPosts);
}

// get post content by post ID
const endPointUrlByPostId = url + "/" + slug + "/" + postId;
fetch(endPointUrlByPostId)
    .then(getResponse)
    .then(object => getPostContentByUserId(object, userId))

function getResponse(response) {
    console.log("End point url: " + endPointUrl);
    return response.json();
}

function getPostContentByUserId(object, userId) {
    if (object !== null && object.userId == userId) {
        console.log(`User ID: ${JSON.stringify(object.userId)}`);
        console.log(`Post ID: ${JSON.stringify(object.id)}`);
        console.log(`Title: ${JSON.stringify(object.title)}`);
        console.log(`Body: ${JSON.stringify(object.body)}`);
    } else {

        console.log(`Empty data or or user ID or post ID is not existing`);
    }
}


