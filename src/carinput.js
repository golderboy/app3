import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,ButtonGroup
        ,InputGroup, InputGroupAddon, Input 
        ,Container, Row, Col 
        ,Table 
      } from 'reactstrap';


class carInput extends Component {

  constructor(props){
    super(props)
    this.state ={
      newCar : ""
    }
    this.onClicked = this.onClicked.bind(this)

    };



  onClicked(){
    let {onCarinsert} = this.props
    onCarinsert(this.state.newCar)
    this.setState({
      newCar : ""
    })
  }


  render() {

    let {newCar} = this.state
    return (
        <div> 
      <Container>
        <Row> 
          <Col xs="6">
            <InputGroup>
              <InputGroupAddon addonType="prepend"> ชื่อรถ  := </InputGroupAddon>
                <Input  value={newCar} onChange={(e)=>this.setState({newCar:e.target.value})} />
            </InputGroup>
          </Col>

          <Col xs="6">
            <ButtonGroup>
              <Button color="primary" onClick={this.onClicked}> Add </Button>
            </ButtonGroup>
          </Col>
          </Row>
      </Container>
            <hr />
            {this.state.newCar}
            <hr />
        </div>

    );
  }
}

export default carInput;

