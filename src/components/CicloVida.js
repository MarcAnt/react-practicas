import React, {Component} from 'react'; 

//Esta clase es creada solo para poder usar componentWillUnmount cuando ya no sea visible
class Reloj extends Component {
    // constructor(props) {
    //     super(props); 
    // }
    componentWillUnmount() {
        
        console.log(2, "El componente ha sido eliminado del DOM");
    }

    render() {
        return <h3>{this.props.hora}</h3> 
    }


}


export default class CicloVida extends Component {

    constructor(props) {
        super(props); 
        console.log(0, 'el componente se inicializa, aun no está en el DOM');
        this.state = {
            hora: new Date().toLocaleTimeString(), 
            visible: false //El reloj no se va a mostrar por defecto hasta que presionemos el boton de iniciar
        }

        this.temporizador = null; 
    }
    //Ya se encuentra en el DOM
    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
    }
    
    //Trabajar con valores antes de actualizar el estado 
    componentDidUpdate(prevProps, prevState) {
        
        console.log(2, "El state o las props han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }
    


    tictac = () => {
        this.temporizador = setInterval(() => {
            
            this.setState({
                hora: new Date().toLocaleTimeString()
            })

        }, 1000);
    }

    iniciar = () => {
        this.tictac(); 
        this.setState({
            visible: true
        });
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        }); 
    }
    
    render() {
        console.log(4, 'el componente se dibuja o redibuja por algún cambio en el DOM');
        return(
            
            <>
                <h2>Ciclo de vida de los componentes de clase</h2>
                {/* <h3>{this.state.hora}</h3> */}

                {/* Hacemos un renderizado condicional del componente */}
                { this.state.visible && <Reloj hora={this.state.hora}/> }

                <button onClick={this.iniciar}> Iniciar</button>
                <button onClick={this.detener} >Detener</button>
            </>

        ); 
    }

}