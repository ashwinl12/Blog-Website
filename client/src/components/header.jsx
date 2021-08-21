import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    component: {
        background: "#ffffff",
        color: "black"
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
})

const Header = ()=>{
    const classes = useStyle();
    return(
        <>
            <AppBar className = {classes.component}>
                <Toolbar className = {classes.container}>
                    <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                        <Typography>Home</Typography>
                    </Link>
                    <Typography>About</Typography>
                    <Typography>Contact</Typography>
                    <Typography>Login</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;