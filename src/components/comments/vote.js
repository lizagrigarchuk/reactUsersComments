import React ,{Fragment,Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';


export default class Vote extends Component{
    constructor(props){
        super(props);
        this.state={
            like:false,
            dislike:false
        }
    }


    render() {
        let {item} = this.props;
        return (
            <ButtonGroup>
                <Button color="success" onClick={()=>this.changeLikes()}>{item.like}</Button>
                <Button color="danger" onClick={()=>this.changeDislikes()}>{item.dislike}</Button>
            </ButtonGroup>
        )

    }

    changeLikes=()=>{
        let {item,click} = this.props;
        let obj = {id: item.id, dislike: 0};
        if (!this.state.like) {
            this.setState({
                like: true
            });
            obj.like = +1;
            if (this.state.dislike) {
                this.setState({
                    dislike: false
                });
                obj.dislike = -1;
            }
        } else {
            this.setState({
                like: false
            });
            obj.like = -1;
        }
        click(obj);
    }

    changeDislikes=()=>{
        let {item,click} = this.props;
        let obj = {id: item.id, like: 0};
        if (!this.state.dislike) {
            this.setState({
                dislike: true
            });
            obj.dislike = +1;
            if (this.state.like) {
                this.setState({
                    like: false
                });
                obj.like = -1;
            }
        } else {
            this.setState({
                dislike: false
            });
            obj.dislike = -1;
        }
        click(obj);
    }
}

