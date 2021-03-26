
import React, {Component} from 'react'; 
import data from '../helpers/data.json'; 


function ElementoLista(props) {

    return(

        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
        </li>
    );

}

export default class RenderizadoElementos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seasons: ['Primaver', 'Verano', 'Invierno', 'Otoño'],
        }
    }

    render() {

        console.log(data);

        return(

            <div>

                <h2>Renderizado Elementos</h2>
                <h3>Renderizado Elementos</h3>
                <ol>
                    {
                        this.state.seasons.map((el, index) => {
                         return   <li key={index} >{el}</li>
                        })
                    }
                </ol> 
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {data.frameworks.map((el) => {
                       return <ElementoLista key={el.id} el={el}/>
                    })}
                </ul>    
            </div>

        ); 
    }
}