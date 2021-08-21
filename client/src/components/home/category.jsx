import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { cat_arr } from "../../constants/data";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    create: {
        margin: 20,
        backgroundColor: "#6495ed",
        color: "white", 
        width: "85%",
    },
    table: {
        border: "1px solid rgba(224, 224, 224, 1)"
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
})

const Categories = ()=>{
    const classes = useStyles();
    return(
        <>
            <Link to="/create" style={{textDecoration:"none"}}>
                <Button className={classes.create} variant="contained">Create Blog</Button>
            </Link>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link className={classes.link} to={`/`}>All Categories:</Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cat_arr.map((val)=>{
                            return(
                                <>
                                    <TableRow>
                                        <TableCell>
                                            <Link className={classes.link} to={`/?category=${val}`}>
                                                {val}
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                </>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </>
    );
}

export default Categories;

