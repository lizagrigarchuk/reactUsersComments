import React,{Component, Fragment} from "react";
import Header from './../includes/header'
import Tree from './tree/index'

export default class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        
        <Tree />
      </Fragment>
    )
  }
}
