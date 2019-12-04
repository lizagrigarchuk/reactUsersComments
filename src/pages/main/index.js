import React ,{Fragment,Component} from "react";
import CarouselMain from "../../components/carousel/index";
import TopNews from "../../components/topNews/index";

export default class HomePage extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Fragment>
        <CarouselMain className={"body_carousel"}/>
        <TopNews count={10}/>
      </Fragment>
    )
  }


}
