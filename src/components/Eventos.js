import React, {Component} from 'react'; 


export class EventosES6 extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            contador: 0,
        };
        //Le bindea el event this de la clase, si no hace, marca undefined
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        console.log("Sumando"); 
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e) {
        console.log("Restando"); 
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {

        return(

            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.restar} >-</button>
                </nav>
                <h3>{this.state.contador}</h3>


            </div>

        ); 
    }
} 
//Properties Initializer
export class EventosES7 extends Component {

    //Em este tipo de clases no hace falta usar el constructor 

    state = {
        contador: 0,
    };
    //arrow Functions 
    sumar = (e) => {
        console.log("Sumando"); 
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        console.log("Restando"); 
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {

        return(

            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.restar} >-</button>
                </nav>
                <h3>{this.state.contador}</h3>


            </div>

        ); 
    }
} 

//Con una funcion normal
// function Boton(props) {
//     return <button onClick={props.myOnClick}>Boton hecho componenete</button>; 
// }

// const Boton = (props) => {
//     <button onClick={props.myOnClick}>Boton hecho componenete</button>;
// }

//Usando destructuracion en las props para usar como un evento personalizado
const Boton = ({myOnClick}) => {
    return <button onClick={myOnClick}>Boton hecho componenete</button>;
}

export class MasSobreEventos extends Component {

    handleClick = (e, mensaje ) => {
        console.log(e);
        //Evento nativo de JS
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);

        //Evento de React o sintetico
        console.log(e.target);

        console.log(mensaje);
    }

    render() {
        return(
            <div>
                <h2>Más sobre eventos</h2>
                {/* Quien le pasa el evento es la arrow function */}
                <button onClick={ (e) => this.handleClick(e, 'Pasando un parametro desde un evento')}>Saludar</button>

                {/* Evento Personalizado */}
                {/* <Boton onClick={ (e) => this.handleClick(e, 'Pasando un parametro desde un evento')} /> */}
                <Boton myOnClick={ (e) => this.handleClick(e, 'Pasando un parametro desde un evento personalizado')} />
            </div>
        ); 
    }
}