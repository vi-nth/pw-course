/**
 * url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts
*
*Please using PROMISE and ASYNC/AWAIT to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
 */

const readline = require('readline-sync');
const url = 'https://jsonplaceholder.typicode.com';
const slug = 'posts';
const endPointUrl = url + "/" + slug;

const userId = readline.question('User ID: ');
const postId = readline.question('Post ID: ');

//get posts content by postID - postID is unique
getPostContentByUserId(userId, postId);
async function getPostContentByUserId(userId, postId) {
    const response = await fetch(endPointUrl + "/" + postId);
    const json = await response.json();
    console.log(`User ID: ${JSON.stringify(json)}`);


    if (json !== null && json.userId == userId) {
        console.log(`User ID: ${JSON.stringify(json.userId)}`);
        console.log(`Post ID: ${JSON.stringify(json.id)}`);
        console.log(`Title: ${JSON.stringify(json.title)}`);
        console.log(`Body: ${JSON.stringify(json.body)}`);
    } else {

        console.log(`Empty data or or user ID or post ID is not existing`);
    }
}


// Print all posts for specific user
getAllPostContent(userId);
async function getAllPostContent(userId) {
    console.log(`Endpoint: ` + endPointUrl);
    const response = await fetch(endPointUrl);
    const json = await response.json();
    const myPostContents = Array.from(json);

    let allPosts = [];
    for (const myPostContent of myPostContents) {
        if (myPostContent.userId == userId) {
            allPosts.push(JSON.stringify(myPostContent));
        }
    }
    console.log("All posts: " + allPosts);
}
