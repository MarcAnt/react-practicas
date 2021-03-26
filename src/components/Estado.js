import React, {Component} from 'react'; 
//El estado es el valor y el flujo de las variables en cierto momento de la aplicación 



function EstadoAHijo(props) {
    return(

        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    ); 
}

export default class Estado extends Component {

    constructor(props) {
        super(props);

        //Aquí se crea el estado
        this.state = {
            contador: 0,
        }


        setInterval(() => {
            //Así se actualiza el estado 
            this.setState({
                contador: this.state.contador + 1,
            }); 
        }, 2000);
    }


    render() {

        return(
            <div>
                <div>El State</div> 
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador} />
            </div>
        ); 
    }

}