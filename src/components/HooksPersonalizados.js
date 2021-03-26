import React from 'react'; 
import {useFetch} from '../hooks/useFetch'; 

export default function HooksPersonalizados() {

    let url = "https://pokeapi.co/api/v2/pokemon/"; 
    // useFetch(url); 
    //La varaibles vienen del objeto retornado en useFetch
    let {data, isPending, error} = useFetch(url); 

    return(
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(data)}</mark>
                
            </h3>
            <h3>
                <pre style={{whiteSpace: 'pre-wrap'}}>
                    <code>{JSON.stringify(error)}</code>
                </pre>
                
            </h3>
        </>
    );
}