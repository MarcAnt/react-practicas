import React, {useState, useEffect} from 'react';


function Reloj({hora}) {
    return <h3>{hora}</h3>
}

export default function RelojHook(props) {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect( () => {
        let temporizador; 

        if (visible) {

            temporizador = setInterval(() => {

                //Lama a la funcion que está en setHora
                setHora(new Date().toLocaleTimeString()); 
            }, 1000);

        }else {
            clearInterval(temporizador); 
        }
        
        
        //Como el component willUnmount para quitarlo del dom
        return () => { 
            console.log("fase de desmontaje"); 
            clearInterval(temporizador); 
        }

    },[visible]); //Solo cuando cambien el valor de variable es que se va a ejecutar 

    return(

        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hora} />}

            
            <button onClick={() => setVisible(true)}> Iniciar</button>
            <button onClick={() => setVisible(false)} >Detener</button>
        </>
    ); 
    
}