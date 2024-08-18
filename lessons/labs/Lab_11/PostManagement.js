const readline = require('readline-sync');
const PostController = require("./PostController");

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

runTest();

async function runTest() {
    // Input userId and postId
    let userId = readline.question('User ID: ');
    let postId = readline.question('Post ID: ');

    // Init controller
    const postController = new PostController(BASE_URL, SLUG);

    // Get all post by userId
    const allPostsByUserId = await postController.getAllPostByUserId(userId);
    console.log(`All posts by user Id ${userId}`)
    console.log(allPostsByUserId);

    // Get target post by userId and post Id
    const targetPost = await postController.getTargetPost(userId, postId);
    console.log(`Target post of user Id ${userId} and post Id ${postId}`);
    console.log(targetPost);

}