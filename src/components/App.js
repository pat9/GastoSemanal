import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header';
import Formulario from './Formulario';

class App extends Component {

  state={
    presupuesto:0,
    restante:0,
    gastos:{}
  }

  //Metodo para agregar gastos al state
  AgregarGasto = gasto =>{
    //Obtener una copia del state
    const gastos = {...this.state.gastos};
    //Agregar el objeto de gasto
    gastos[`gasto${Date.now()}`] = gasto;
    console.log(gastos);
    //Actualizar el state
  }

  render() {
    return (
      <div className="App container">
        <Header titulo="Gasto Semanal"/>
        <div className="contenido-principal contenido ">
          <div className="row">
            <div className="one-half column">
              <Formulario AgregarGasto={this.AgregarGasto}/>
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
