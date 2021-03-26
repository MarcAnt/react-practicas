import React, {useState, useEffect} from 'react';

export default function ScrollHooks(props) {


    const [scrollY, setScrollY] = useState(0); 

    //Permite hacer uso del ciclo de vida en un componente funcional. Usar useEffect equivale a la combinación de los métodos:

    useEffect( () => {
        console.log('Moviendo el scroll'); 

        const detectarScroll = () => {
            setScrollY(window.pageYOffset); 
        }

        //Nos suscribimos al evento scroll de window
        window.addEventListener('scroll', detectarScroll); 

        return () => {
            window.removeEventListener('scroll', detectarScroll);
            console.log('fase de desmontaje'); 
        } 

    },[scrollY]); //Solo se actualiza cuando la variable scrolly tenga cambios 
    





    //Solo se ejecuta cuando el valor del array cambie []
    useEffect( () => {
        console.log('fase de Montaje'); 

    },[]); //dejarlo vacio para que solo se use en la fase de montaje y se ejecuta una sola vez

    //Como un component didUpdate
    useEffect( () => {
        console.log('fase de Actualizacion'); 

    }); 

    //Fase de desmontaje o desuscribirnos a eventos, temporizadores, servicios, API's, etc. Siempre que tenga la funcion de return
    useEffect( () => {
        console.log('fase de desmontaje'); 

        return() => {

        };
    }); 
    
    return(

        <>
           <h2>Hooks - useEffects y cliclo de Vida</h2> 
           <p>Scroll Y del Navegador {scrollY}px</p> 
        </>

    ); 

}