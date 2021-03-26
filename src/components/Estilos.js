import React from 'react';
import './Estilos.css'; 
import './Estilos.scss'; 
import moduleStyles from './Estilos.module.css'; 

export default function Estilos() {
    let myStyle = {
        borderRadius: '.25rem',
        margin: '2rem auto',
        maxWidth: '50%'
    }

    return(
        <section className="estilos">

            <h2>Estilos CSS</h2>
            <h3 className="bg-react">Estilos en hoja CSS externa </h3>
            <h3 className="bg-react" style={{borderRadius: '.25rem', margin: '1rem'}}>Estilos en línea </h3>
            <h3 className="bg-react" style={myStyle}>Estilos en línea </h3>
            <h3 className="bg-react">
                Agregando Normalize con (que se debe de colocar en el index.css) <br />
                <code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con módulos</h3>
            <h3 className="bg-sass">Estilos con SASS (descargar el npm)</h3>
        </section>
    ); 

}