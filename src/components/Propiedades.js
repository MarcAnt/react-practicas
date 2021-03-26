import React from 'react'; //Componente principal
import PropTypes from 'prop-types'; 

export default function Propiedades(props) {
    return(

        <div>

            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero': 'Falso' }</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.nombre + ' - ' + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>

    );  
}

//Propiedades por defecto 
Propiedades.defaultProps = {
    porDefecto : 'Esta es una propiedad por defect'
}; 

//Definiendo los valores por tipo con la libería npm i -S prop-types

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,
}