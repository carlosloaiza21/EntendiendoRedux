import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { Agregar } from "./actions";

class App extends Component {
  constructor(props){
    super(props)
    this.cambiar = this.cambiar.bind(this)
  }
  cambiar = ()=>{
    const nombre = document.querySelector("#texto").value
    this.props.cambiar(nombre)
  }
  render() {
    return (
      <div className="App">
        <br/><br/>
        <h1>{this.props.prueba.data[0].nombre}</h1>
        <input id="texto" type="text" /><button onClick={this.cambiar}>Cambiar</button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    prueba:state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    cambiar: (nombre) =>{
      dispatch(Agregar(nombre))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
