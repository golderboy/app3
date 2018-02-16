import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,ButtonGroup } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
class Header extends Component {
  render() {
    return (
        <div> 
            <hr />
           <h1>My Car Shop</h1>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
            <hr /><br />
        </div>
    );
  }
}

export default Header;