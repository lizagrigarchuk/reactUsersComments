import React ,{Fragment,Component} from "react";
import Gallery from "../../components/gallery/gallery";
import {} from 'reactstrap';
import TopNews from "../../components/topNews/index";
import Scss from "./../../scss/style.scss"



export default class HomePage extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Fragment>

        <Gallery/>
        <div className="text_main">
          <h1>{"Каталог мебели с ценами и фотo"}</h1>
          <p>Более 12.000 актуальных предложений с ценами и фото. Более 150 продавцов!</p>
          <p>Выбирайте, звоните, покупайте – мы поможем вам найти лучшее.</p>
        </div>
        <TopNews count={10}/>
      </Fragment>
    )
  }


}
