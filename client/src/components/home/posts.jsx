import Post from "./post";
import { Grid } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../service/api";

const Posts = ()=>{
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    //let total_posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(()=>{
        const fetchData = async () => {
            let data = await getAllPosts(search); // we passed query params here
            console.log(data);
            setPosts(data);
        }
        fetchData();
    },[search])

    return(
        <>
            {
                posts.map((post)=>{
                    return(
                        <>
                        <Grid item lg={3} sm={4} xs={12} >
                            <Link to = {`/details/${post._id}`} style={ {textDecoration:"none", color:"inherit"}}>
                                <Post post={post}/>
                            </Link>
                        </Grid>
                        </>
                    )
                })
            }
        </>
    )
}

export default Posts;