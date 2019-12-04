import React ,{Fragment,Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';


export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
          <ButtonGroup>
               <Button color="success" onClick={this.props.add}>add</Button>
               <Button color="success" onClick={this.props.sort}>sort</Button>
               <Button color="success">{this.props.count}</Button>
          </ButtonGroup>
          <ButtonGroup>
               <Button color="primary" onClick={this.props.all}>all</Button>
               <Button color="success" onClick={this.props.done}>done</Button>
               <Button color="danger"  onClick={this.props.undone}>undone</Button>
          </ButtonGroup>
      </Fragment>
    )
  }
}
