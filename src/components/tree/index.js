import React ,{Fragment,Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';
import ItemTree from './item';
import Header from './../../includes/header'
import Modal from './../modal/index';

export default class Tree extends Component{
  constructor(props){
    super(props);
    this.state ={
        data: [],
        copy : [],
        info: null,
        isOpen: false
    }
  }

  render(){
    return(
      <Fragment>
          <Header count={this.state.copy.length}
                  done={this.sortDone}
                  all={this.sortAll}
                  add={this.add}
                  sort={this.sort}
                  undone={this.sortUndone}
                  />
          {
            this.state.copy.map((item,i)=><ItemTree
              key={i}
              data={item}
              done={this.done}
              remove={this.removeItem} />)
          }

      </Fragment>
    )
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.setState({
          data:json,
          copy: json
        }))
  }

  add =()=>{
    console.log("add");
  }

  sort =()=>{

    console.log("sort");
  }

  removeItem = (id) =>{
    let info = this.state.data.filter((item,i) => item.id!=id);
    this.setState({
      data: info,
      copy: info
    })
  }

  done = (id) =>{
    console.log('done----',id)
    let x = this.state.data.map((item,i) => {
      if(item.id==id) {
        item.completed=true;
        return item;
      }

      return item;
    });

     this.setState({
       data:x,
       //copy:x,
     })
  }

  sortDone =()=>{
    let x = this.state.data.filter((item,i) => item.completed);

     this.setState({
       copy:x
     })
  }

  sortUndone =()=>{
    let x = this.state.data.filter((item,i) => !item.completed);

     this.setState({
       copy:x
     })
  }

  sortAll =()=>{
    this.setState({
      copy:[...this.state.data]
    })
  }

  closeModal = () =>{
    this.setState({
      isOpen:!this.state.isOpen
    })
  }
}
