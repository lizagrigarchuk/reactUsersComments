import React ,{Fragment,Component} from "react";
import Vote from './vote'

export default class CommentsList extends Component{
    constructor(props){
        super(props);

    }


    render() {
        let {item,click} = this.props;
        return (
            <div  className="item_info">
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.email}</div>
                <div>{item.body}</div>
                <Vote item={item} click={click}/>
            </div>)

    }
}

