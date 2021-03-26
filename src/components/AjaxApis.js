
import React, {Component} from 'react'; 


function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.avatar} />
            <figcaption>{props.name}</figcaption>    
        </figure>
    );
}


export default class AjaxApis extends Component {

    state = {
        pokemons: []
    }

    //recordar que aqui es donde se hace la peticion en la funcion componentDidMount
    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";

        fetch(url)
            .then(res => res.json())
            .then(json => {
            //    console.log(json);
                json.results.forEach(el => {
                    fetch(el.url)
                    .then(res => res.json())
                    .then(json => {
                        console.log(json);

                        let pokemon = {
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default
                        }    

                        //Que obtenga una copia del estado actual y lo combina con el obejto de pokemon
                        let pokemons = [...this.state.pokemons, pokemon];

                        console.log('pokemons', pokemons); 

                        //se hace destructuring porque el array tiene el mismo nombre del pokemon y se actualiza el estado 
                        this.setState({pokemons});
                    })
                });
            })
    }


    
    render() {
        return(

            <>
                <h2>Peticiones Asincronas</h2>
                {this.state.pokemons.length === 0 ? <h3>Cargando...</h3> : this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} /> )  }
            
            </>

        );
    }
}