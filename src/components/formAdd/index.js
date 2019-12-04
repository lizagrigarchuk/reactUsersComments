import React ,{Fragment,Component} from "react";
import {} from 'reactstrap';


export default class Form extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Fragment>
        <table className={"table"}>
        <tbody>
          <tr>
            <td>{"title"}</td>
            <td colspan="2"><input type="text"/></td>
          </tr>
          <tr>
            <td>{"completed"}</td>
            <td>{"true/false"}</td>
            <td>{"true/false"}</td>
          </tr>
          <tr>
            <td>{"UserId"}</td>
            <td><input type="text"/></td>
          </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }

}
