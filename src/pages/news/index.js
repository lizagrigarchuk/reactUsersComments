import React ,{Fragment,Component} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup } from 'reactstrap';
import ItemList from "./itemList";
import Pagination from "../../components/PaginacionTabla/index";


export default class NewsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            pageOfItems: [],
            pageSize:10
        };
        this.pageSizeButt = this.pageSizeButt.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }


    render() {
        return (
            <Fragment>
              <div className="div_flex">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Показывать по:
                    <select value={this.state.value} onChange={this.pageSizeButt}>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option>Все</option>
                    </select>
                  </label>
                </form>
                {this.state.pageSize ?
                  <Pagination items={this.state.items} onChangePage={this.onChangePage} pageSize={this.state.pageSize}/>
                  :null}
              </div>
                {this.state.pageOfItems.map((item,i) =>
                    <ItemList key={i} item={item} className={"item_news"} click={this.changeVote}/>
                )}
            </Fragment>
        );
    }

    pageSizeButt(event) {
      this.setState({pageSize: +event.target.value});
    }

    changeVote=(obj)=>{
        let update = this.state.items.map(item=>{
            if (obj.id === item.id) {
                item.like += obj.like;
                item.dislike += obj.dislike;
            }
            return item;
        });
        this.setState({items:update});
    }
    

  componentDidMount(){
        
      fetch("https://jsonplaceholder.typicode.com/posts").then(data=>data.json())
          .then(news => {
              return news.map((item)=>{
                  item.like=this.randomInteger(1,100);
                  item.dislike=this.randomInteger(1,100);
                  return item;
              })
          })
              .then(items =>this.setState({
                items: [...items]
              }))

  }

    randomInteger = (min, max) => {
        // случайное число от min до (max)
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
    }
}

