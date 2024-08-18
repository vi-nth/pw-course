const Post = require("./Post");

class PostController {

    constructor(baseUrl, slug) {
        this.url = `${baseUrl}${slug}`;
    }

    // service method
    async getAllPostByUserId(userId) {
        const allPosts = await this._getAllPost();
        return allPosts.filter(function (userPost) {
            return (userPost._userId === parseInt(userId));
        });
    }

    // service method
    async getTargetPost(userId, postId) {
        const userPosts = await this._getAllPost(userId);
        const targetPost = userPosts.filter(function (userPost) {
            return (userPost._id === parseInt(postId));
        })[0];

        if (targetPost && targetPost._userId === parseInt(userId)) {
            return targetPost;
        } else {
            console.log(`The postId ${postId} is NOT existing for userID ${userId}`);
        }
    }

    // support method
    async _getAllPost() {
        const response = await fetch(this.url);
        const jsonResponse = await response.json();
        return jsonResponse.map(function (json) {
            const { userId, id, title, body } = json;
            return new Post(userId, id, title, body)
        })
    }

}

module.exports = PostController;