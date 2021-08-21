import Banner from "./banner";
import Categories from "./category"
import Posts from "./posts"
import { Grid } from "@material-ui/core";

const Home = ()=>{
    return(
        <>
            <Banner/>
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories/>
                </Grid>
                <Grid container item lg={10} xs={12} sm={10}>
                    <Posts/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;