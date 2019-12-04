import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Link } from "react-router-dom";
import  Modal  from "../../components/modal/index";
import CommentsList from "../../components/comments/index";
import Vote from "../../components/comments/vote";

export default class itemList extends Component{
  constructor(props){
    super(props);
    this.state= {
      comments: [],
       isOpen:false
    }
  }
  
  
  render(){
    let {item,click} = this.props;
    return(
          <Card className={this.props.className}>
            <CardBody>
              <p>{item.id}</p>
              <p><Link to={`/news/post/${item.id}`}>{item.title}</Link></p>
              <p>{item.body}</p>
              <p onClick={this.showComments}>comments: {this.state.comments.length}</p>
              <Vote item={item} click={click}/>
            </CardBody>
              {this.state.isOpen ?
                  <Modal toggle={this.showComments}>
                      {
                          this.state.comments.map((item,i)=>
                            <CommentsList item={item} key={i} click={this.changeVote}/>
                              )
                      }
                  </Modal>
                  :null}

          </Card>
    )
  }

  changeVote=(obj)=>{
    let update = this.state.comments.map(item=>{
      if (obj.id === item.id) {
        item.like += obj.like;
        item.dislike += obj.dislike;
      }
      return item;
     });
    this.setState({comments:update});
  }

  componentDidMount (){

    let id = this.props.item.id;

      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then(data => data.json())
          .then(comments => {
            return comments.map((item)=>{
                item.like=this.randomInteger(1,100);
                item.dislike=this.randomInteger(1,100);
                return item;
            })
          })
          .then(comments => this.setState({comments: comments}));
  }

    randomInteger = (min, max) => {
        // случайное число от min до (max)
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
    }
    showComments=()=>{
    console.log(11);
      this.setState({
          isOpen:!this.state.isOpen
      })
    }
}

