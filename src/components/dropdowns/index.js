import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Dropdown_page extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      pageSize:undefined
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          10
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={console.log(111)}>20</DropdownItem>
          <DropdownItem onClick={console.log(22)}>50</DropdownItem>
          <DropdownItem onClick={console.log(33)}>100</DropdownItem>
          {/* <DropdownItem onClick={this.setState({pageSize:all})}>All</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    );
  }
}