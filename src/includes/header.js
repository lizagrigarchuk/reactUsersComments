import React ,{Fragment,Component} from "react";
import { Nav, NavItem, NavLink  } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <Nav>
          <NavItem>
            <Link to="/">Главная</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Авторизация</Link>
          </NavItem>
          <NavItem>
            <Link to="/news">Новости</Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">Профиль</Link>
          </NavItem>
        </Nav>
      </Fragment>
    )
  }
}
