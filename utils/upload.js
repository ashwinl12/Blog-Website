import {GridFsStorage} from "multer-gridfs-storage";
import multer from 'multer'

const storage = new GridFsStorage({
    url: 'mongodb+srv://user:user123@blogweb.uwo44.mongodb.net/blogdata?retryWrites=true&w=majority',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    file: (req, file)=>{
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType)===-1)
            return `${Date.now()}-blog-${file.originalname}`;
            
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }

})

export default multer({storage});