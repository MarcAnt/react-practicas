import React, {useState} from 'react';

export default function ContadorHooks(props) {
    //contador es la variable de estado y el setContador es la funcion que lo actualiza 
    const [contador, setContador] = useState(0); 

    const sumar = () => setContador(contador + 1); 
    const restar = () => setContador(contador - 1); 

    return(

        <>
        <h2>Hooks - useState</h2>

        <nav>
            <button onClick={sumar} >+</button>
            <button onClick={restar} >-</button>
        </nav>
        <h3>{contador}</h3>
        </>

    ); 
}

 
//Paso de propiedades por defecto 
ContadorHooks.defaultProps = {
    titulo: 'Clicks'
}; 

