import React,{Component, Fragment} from "react";
import Header from './../includes/header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./../pages/main/index";
import LoginPage from "./../pages/login/index";
import NewsPage from "./../pages/news/index";
import ProfilePage from "./../pages/profile/index";
import NotFound from "./../pages/404/index";
import NewsItemPage from "./../pages/news/itemInfo";

export default class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/news/post/:id" component={NewsItemPage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }

  



}
