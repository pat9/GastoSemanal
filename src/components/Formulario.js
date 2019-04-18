import React,{ Component } from "react";

class Formulario extends Component{

    //Refs

    NombreGasto = React.createRef();
    CantidadGasto = React.createRef();

    //Metodo para leer datos y crear el objeto de gasto
    CrearGasto = (e) =>{
        //Prevenir default
        e.preventDefault();
        //Crear el objeto con los datos
        const gasto = {
            NombreGasto:this.NombreGasto.current.value,
            CantidadGasto:this.CantidadGasto.current.value
        }

        e.currentTarget.reset();
    }

    render(){
        return(
            <form onSubmit={this.CrearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.NombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.CantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

export default Formulario;