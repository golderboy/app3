import React, { Component } from 'react';
import Caritems from './caritems';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Carlist extends Component {
  render() {
      let {items} = this.props
    return (
        <div> 
            Insert Car List 
                <ul>

            </ul>
       <ListGroup>
       { items.map((data,i) => 
        <ListGroupItem key={i} ><Caritems  text={data}/></ListGroupItem>
       )}
      </ListGroup>
                
        </div>
    );
  }
}

export default Carlist;

