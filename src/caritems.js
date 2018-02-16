import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon,InputGroupText, Input  } from 'reactstrap';

const Text = styled.span `
    font-size: ${props => (props.completed ? 22 : 14)};
    color: ${props => (props.completed ? 'red' : 'black')};
    text-indent: 30px;
    `
class Caritems extends Component {

    
    constructor(props){
        super(props)
        this.state ={
          done: false
        }
        this.toggle = this.toggle.bind(this)
      }

    toggle(){
        this.setState({
            done: !this.state.done
        })
    }//กลับค่า

  render() {
      let {text} = this.props
    return (
        <div> 
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <input  type="checkbox" addon type="checkbox" 
                                value={this.state.done}
                                onClick={this.toggle} />
                        
                    </InputGroupText>
                </InputGroupAddon>
                    <Text completed={this.state.done}>{this.state.done ? " Select : "+text:text}</Text>
            </InputGroup>
        </div>
    );
  }
}

export default Caritems;

