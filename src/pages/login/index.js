import React ,{Fragment,Component} from "react";
import {} from 'reactstrap';
import LoginForm from "./../../components/loginForm/index";

export default class LoginPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <h1>{"Login"}</h1>
        <LoginForm />
      </Fragment>
    )
  }


}
