import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import { useEffect, useState } from "react";
import { createPost, uploadFile } from "../../service/api";
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
}));

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'Anonymous',
    category: 'philosophy',
    createdDate: new Date()
}

const CreateView = ()=>{
    const classes = useStyle();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const history = useHistory();

    //using states
    const [post, setPost] = useState(initialValues);
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
            }
        }
        getFile();

    }, [file])

    const handleChange = (e)=>{
        setPost({...post, [e.target.name]: e.target.value });
    }

    const savePost = async ()=>{
        await createPost(post);
        history.push('/');
    }
    
    return(
        <Box className={classes.container}>
            <img src={post.picture || url} alt="banner" className={classes.image}/>

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
                <InputBase onChange = {(e)=>handleChange(e)} name='title' placeholder="Enter title" className={classes.textfield}/>
                <InputBase onChange = {(e)=>handleChange(e)} name='username' placeholder="Author Name" className={classes.textfield}/>
                <InputBase onChange = {(e)=>handleChange(e)} name='category' placeholder="Genre" className={classes.textfield}/>
                <Button onClick = {()=>savePost()} variant="contained" color="primary" >Publish</Button>
            </FormControl>

            <TextareaAutosize
                minRows={5}
                placeholder="tell me something"
                className={classes.textarea}
                onChange = {(e)=>handleChange(e)}
                name='description'
            >
                    
            </TextareaAutosize>

        </Box>
    )
}

export default CreateView;