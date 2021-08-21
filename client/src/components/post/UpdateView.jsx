import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import { useEffect, useState } from "react";
import { getPost, updatePost, uploadFile } from "../../service/api";
import {useHistory} from "react-router-dom";

const useStyle = makeStyles((theme)=>({
    container : {
        padding: "0 100px",
        [theme.breakpoints.down('md')]: {
            padding: "0 5px"
        }
    },

    image : {
        width: "100%",
        height: "50vh",
        objectFit: "cover",
    },
    form: {
        display: "flex", 
        flexDirection: "row", 
        margin: 10
    },
    textfield: {
        flex: 1,
        margin: "0 25px",
        fontSize: 25
    },
    textarea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,
        '&:focus-visible':{
            outline: "none"
        }
    }
}))

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'Itachi Uchiha',
    category: 'philosophy',
    createdDate: new Date()
}

const UpdateView = ({match})=>{
    const classes = useStyle();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    
    const [post, setPost] = useState(initialValues);
    const history = useHistory();

    const [file, setFile] = useState('');
    const [image, setImage] = useState('');


    useEffect(()=>{
        const getFile = async ()=>{
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
                console.log(`Update picture: ${post.picture}`);
                await updatePost(match.params.id, post);
                console.log("Post updated.....");
            }
        }
        getFile();

    }, [file])

    useEffect(()=>{
        const fetchData = async ()=>{
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }

        fetchData();

    }, [])

    const handleChange = (e)=>{
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const updateBlog = async ()=> {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }
    
    return(
        <Box className={classes.container}>
            <img src={ post.picture || url} alt="banner" className={classes.image}/>

            <FormControl className={classes.form}>
            <label htmlFor="fileInput" >
                    <AddCircle fontSize="large" color="action" />
                </label>
                <input 
                    type="file"
                    id="fileInput"
                    style={{display:'none'}}
                    onChange = {(e)=>setFile(e.target.files[0])}
                />
                <InputBase placeholder="Enter username" name="title" onChange = {(e)=>handleChange(e)} value={post.title} className={classes.textfield}/>
                <Button variant="contained" color="primary" onClick = { ()=>updateBlog() } >Update</Button>
            </FormControl>

            <TextareaAutosize
                minRows={5}
                placeholder="tell me something"
                className={classes.textarea}
                value={post.description}
                name = "description"
                onChange = {(e)=>handleChange(e)}
            >
                    
            </TextareaAutosize>

        </Box>
    )
}

export default UpdateView;