import { useState, useEffect } from 'react';
//Este hooks se usa en el HooksPersonalizado
export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        const getData = async (url) => {

            try {
                let res = await fetch(url); 
                if (!res.ok) {
                    throw {
                        err:true, 
                        status:res.status, 
                        statusText: !res.statusText ? 'Ocurrió un error' : res.statusText
                    }; 
                }

                let data = await res.json();
                
                //Se actualizan las variables de estado
                setIsPending(false); //Ya no se esperan los datos
                setData(data); //Se envian los datos
                setError({err: false});  //ya no hay errores
                
                
            } catch (err) {
                setIsPending(true); //Ya no se esperan los datos
                setError({err: true});  //hay errores
                
            }

        }

        getData(url);


    }, [url] ); 

    return {data, isPending, error}
}