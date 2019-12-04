import React ,{Fragment,Component} from "react";
import {} from 'reactstrap';
import Body from '../../includes/body/index';
import Map from '../../components/map/index';


export default class CatalogPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            maps: [{
                coords:[53.90, 27.56],
                previewText: 'Привет мир',
                marker: 'islands#blueRapidTransitIcon',
                description: 'Привет мирПривет мирПривет мирПривет мир',
                address: 'ул.Карла Маркса, 25'
            },
                {
                    coords:[55.90, 22.56],
                    previewText: '222',
                    marker: 'islands#redRapidTransitIcon',
                    description: 'Привет мирПривет мирПривет мирПривет мир',
                    address: 'ул.Ленин, 25'
                }],
            show: undefined
        }
    }


    render(){
        return(
            <Fragment>
                <Body>
                    <h1>{"Catalog page"}</h1>
                {this.state.maps.map((item,i)=>
                    <p key={i} onClick={()=>this.addMarker(i)}>{item.address}</p>
                )}
                {
                    this.state.show != undefined ?
                        <Map item={this.state.maps[this.state.show]}></Map>: null
                }
                </Body>
            </Fragment>
        )
    }
    addMarker = (id) => {
        this.setState({show:id});
    }


}
