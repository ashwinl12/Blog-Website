import Post from "../schema/post-schema.js";

export const createPost = async (req, res)=>{
    console.log(req.body);
    try {
        const post = await new Post(req.body);
        post.save();
        res.status(200).json('blog saved successfully :)');
    }
    catch(err) {
        res.status(500).json(err);
    }
}

export const getAllPosts = async(req, res) =>{

    let username = req.query.username;
    let category = req.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({username: username});
        else if(category) 
            posts = await Post.find({category: category});
        else 
            posts = await Post.find({}); // gives back all the posts
        
        res.status(200).json(posts);
    } catch(err){
        res.status(500).json(err);
    }
}

export const getPost = async (req, res) => {
    try {
        let post = await Post.findById({_id: req.params.id});
        console.log(`The post data: ${post}`)
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
}

export const updatePost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate({_id: req.params.id}, { $set: { title: req.body.title, description: req.body.description, picture: req.body.picture } });
        res.status(200).response("Post updated successfully :)")
    } catch(err) {
        res.status(500).json(err);
    }
}

export const deletePost = async (req, res) => {
    try {
        let post = await Post.findById({_id: req.params.id});
        await post.delete() ;
        res.status(200).response("Post deleted successfully :)")
    } catch(err) {
        res.status(500).json(err);
    }
}

