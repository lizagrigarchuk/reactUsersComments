import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Circle, Heart } from 'react-spinners-css';
import FormUser from '../../components/form/index';
import Modal from '../../components/modal/index'
import CommentsList from "../../components/comments/index";
import Vote from "../../components/comments/vote";

//import { getRandomColor } from '@bit/joshk.jotils.get-random-color'

export default class NewsItemPage extends Component{
  constructor(props){
    super(props);
    this.state= {
      info: undefined,
      comments: [],
        isOpen:false
    }
  }


  render(){

    return(
      <Fragment>
          <Link to={"/news/"}>К списку </Link>
          <Button color="info" onClick={() =>this.showModal()}>Add Comment</Button>
          {/* <FormUser/> */}
          { this.state.info!=undefined ?
            <div>
              <CardBody className="item_info_one">
                <p>{this.state.info.title}</p>
                <p>{this.state.info.body}</p>
                  {this.state.info != undefined ?
                      <Vote item={this.state.info} click={this.changeVoteInNews}/> : null

                  }
                </CardBody>
                {
                  this.state.comments.map((item,i)=>
                      <CommentsList item={item} key={i} click={this.changeVote}/>
                      )
                }
                {this.state.isOpen?
                    <Modal toggle={this.showModal}>
                        <FormUser/>
                    </Modal>: null
                }
                </div>
            :<Heart color={"#be97e8"} />
          }


      </Fragment>
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

    changeVoteInNews=(obj)=>{
      let update = Object.assign({},this.state.info);
      update.like += obj.like;
      update.dislike += obj.dislike;
      this.setState({
          info: update
      });
    }

    randomInteger = (min, max) => {
        // случайное число от min до (max)
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
    }

  showModal=() =>{
    this.setState({
            isOpen: !this.state.isOpen
        }
      )
  }


  componentDidMount (){
    let id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data=>data.json())
        .then(item => {
            item.like=this.randomInteger(1,100);
            item.dislike=this.randomInteger(1,100);
            return item;

        })
        .then(item =>this.setState({
              info: item
            }));
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
}

