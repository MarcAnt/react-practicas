import React, {Component} from 'react'; 


export default class Padre extends Component {

    state = {
        contador: 0
    }

    //Esto lo va ejecutar es el hijo 
    incrementarContador = (e) => {

        this.setState({
            contador: this.state.contador + 1
        })

    }

    render() {
        return(

            <>
                <h2>Comunicanción entre componentes</h2>

                <p>{this.state.contador}</p>

                {/* Este lo ejecuta el hijo como una funcion o evento personalizada */}
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 1"/>
                <Hijo mensaje="Mensaje para el hijo 2"/>
            </>

        ); 
    }

}

function Hijo(props) {
    return(

        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador} >+</button>
        </>
    );  
}