import React from "react";
import Header from "./components/header";
import Home from "./components/home/home";
import {Box} from "@material-ui/core";
import DetailView from "./components/post/DetailView";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";

const App = ()=>{
  return (
    <BrowserRouter>
      <Header/>
      <Box style= {{marginTop: 64}}>      {/* This box is nothing but just a div in material ui */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/details/:id' component={DetailView}/>
          <Route exact path="/create" component={CreateView}/>
          <Route exact path="/update/:id" component={UpdateView}/>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;