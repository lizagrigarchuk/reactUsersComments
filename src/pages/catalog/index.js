import React ,{Fragment,Component} from "react";
import {} from 'reactstrap';
import Body from '../../includes/body/index';


export default class CatalogPage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Fragment>
                <Body>
                <h1>{"Catalog page"}</h1>
                </Body>
            </Fragment>
        )
    }


}
