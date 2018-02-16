import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './header';
import Footer from './footer';
import Carinput from './carinput';
import Carlist from './carlist';
import Caritems from './caritems';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
constructor(props){
  super(props)
  this.state ={
    Todoitems : []
  }
  this.Carinsert = this.Carinsert.bind(this)
}

Carinsert(newCarinsert){
  this.setState({
    Todoitems: this.state.Todoitems.concat([newCarinsert])
  })
}

  render() {
    let {Todoitems} = this.state
    return (
      <div>
        <Header />
        <Carinput  onCarinsert={this.Carinsert} />
        <Carlist items={Todoitems}/>
        <Footer />
      </div>
    );
  }
}

export default App;
