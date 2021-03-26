// import React, {Component} from 'react'; //Componente principal que se usa en la clase
import React from 'react'; //Componente principal


//Funcion expresado 
const Componente = (props) => <h2>{props.msg}</h2>; 


//Como una funcion declarada
// function Componente(props) {
//     return <h2>{props.msg}</h2>;
// }


// class Componente extends Component {

//     render() {
//         return <h2>{this.props.msg}</h2>; 
//     }

// }

export default Componente; 