import axios from "axios";

const url = "";

export const createPost = async (post)=>{
    try {
        return await axios.post(`${url}/create`, post);
    }
    catch(err){
        console.log("Error while calling createpost api :(", err);
    }
}

export const getAllPosts = async(params) => {
    try {
        let response = await axios.get(`${url}/posts${params}`);
        return response.data;
    }catch(err){
        console.log("error while calling getallposts api", err);
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    } catch(err) {
        console.log("Error while fetching post data", err)
    }
}

export const updatePost = async (id, post) => {
    try {
        await axios.post(`${url}/update/${id}`, post)
    } catch(err) {
        console.log("Error while calling updatePost api", err)
    }
}

export const deletePost = async (id) => {
    try{
        await axios.delete(`${url}/delete/${id}`)
    } catch(err) {
        console.log("Error while calling deletePost api", err);
    }
}

export const uploadFile = async (data)=> {
    try {
        return await axios.post(`${url}/file/upload`, data);
    }catch(err){
        console.log("Error while uploading the file", err);
    }
}