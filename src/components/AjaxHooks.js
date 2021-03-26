import React, {useEffect, useState} from 'react';

function Pokemon({avatar, name}) {
    return(
        <figure>
            <img src={avatar} alt={avatar} />
            <figcaption>{name}</figcaption>    
        </figure>
    );
}

export default function AjaxHooks( props ){

    const [pokemons, setPokemons] = useState([]); //se espera recibir un arreglo desde la api

    // useEffect( () => {

    //     let url = "https://pokeapi.co/api/v2/pokemon/";

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(json => {
    //         //    console.log(json);
    //             json.results.forEach(el => {
    //                 fetch(el.url)
    //                 .then(res => res.json())
    //                 .then(json => {
    //                     //console.log(json);

    //                     let pokemon = {
    //                         id: json.id,
    //                         name: json.name, 
    //                         avatar: json.sprites.front_default 
    //                     }    

    //                     console.log([...pokemons, pokemon]);

    //                     setPokemons( (pokemons) => [...pokemons, pokemon] ); 

    //                 })
    //             });
    //         })

    // },[]); //Hay que dejarlo asi porque es un componente que se ejecutara una sola vez


    //refactorizando y usando async await 
    useEffect(  () => {

        //Hay que crear la funcion para poder hacer peticones asincronas
         //Aqui es donde se aplica el async 
        const getPokemons = async (url) => {

            // let url = "https://pokeapi.co/api/v2/pokemon/";

            let res = await fetch(url), 
                json = await res.json();

           
                //    console.log(json);
            json.results.forEach( async el => {

                let res = await fetch(el.url), 
                    json = await res.json();
                
                    // console.log(json);

                    let pokemon = {
                        id: json.id,
                        name: json.name, 
                        avatar: json.sprites.front_default
                        // avatar: json.avatar
                    }    

                    // console.log([...pokemons, pokemon]);

                    setPokemons( (pokemons) => [...pokemons, pokemon] ); 

            })

        }

        getPokemons("https://pokeapi.co/api/v2/pokemon/");

      

    },[]); //Hay que dejarlo asi porque es un componente que se ejecutara una sola vez

    return(

        <>
            <h2>Peticiones Asincronas en Hooks</h2>
            {pokemons.length === 0 ? <h3>Cargando...</h3> : pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} /> )  }
        
        </>

    );
}