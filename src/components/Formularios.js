import React, { useState } from 'react';


// export default function Formularios() {

//     const [nombre, setNombre] = useState(""); 
//     const [sabor, setSabor] = useState(""); 
//     const [lenguaje, setLenguaje] = useState(""); 
//     const [terminos, setTerminos] = useState(false); 

//     const handleSubmit = (e) => {
//         e.preventDefault(); 

//         alert('El formulario enviado'); 
//     }

//     return(
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="nombre">Nombre:</label>
//                 <input type="text" id="nombre" name="nombre" 
//                 value={nombre} 
//                 onChange={(e) => setNombre(e.target.value)} />

//                 <p>Elige tu sabor JS favorito: </p>                
//                 <input type="radio" id="vanilla" name="sabor" 
//                 value="Vanilla" 
//                 onChange={(e) => setSabor(e.target.value)} defaultChecked />
//                 <label htmlFor="sabor">Vanilla</label>

//                 <input type="radio" id="angular" name="sabor" 
//                 value="Angular" 
//                 onChange={(e) => setSabor(e.target.value)}  />
//                 <label htmlFor="sabor">Angular</label>

//                 <input type="radio" id="react" name="sabor" 
//                 value="React" 
//                 onChange={(e) => setSabor(e.target.value)}  />
//                 <label htmlFor="sabor">React</label>

//                 <input type="radio" id="vue" name="sabor" 
//                 value="Vue" 
//                 onChange={(e) => setSabor(e.target.value)}  />
//                 <label htmlFor="sabor">Vue</label>

//                 <input type="radio" id="svelte" name="sabor" 
//                 value="Svelte" 
//                 onChange={(e) => setSabor(e.target.value)}  />
//                 <label htmlFor="sabor">Svelte</label>

//                 <p>Elige tu lenguaje de programación favorito: </p>     
//                 <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
//                     <option value="">---</option>
//                     <option value="js">JavaScript</option>
//                     <option value="php">php</option>
//                     <option value="py">Python</option>
//                     <option value="go">Go</option>
//                     <option value="rb">Ruby</option>
//                 </select>

//                 <br />

//                 <label htmlFor="terminos">Términos y Condiciones</label>
//                 <input type="checkbox" id="terminos" 
//                 name="terminos" 
//                 onChange={(e) => setTerminos(e.target.checked)} />  

//                 <br />

//                 <input type="submit" />

//             </form>
//         </>

//     ); 
// }


export default function Formularios() {

    const [form, setForm] = useState({}); 
    
    const handleChange = (e) => {

       
        // Para valores que son tipo checkbox  
        setForm({
            ...form, 
            [e.target.name]: e.target.value 
        }); 

    }
    const handleChecked = (e) => {

        setForm({
            ...form, 
            [e.target.name]: e.target.checked 
        }); 

    }

    const handleSubmit = (e) => {
        e.preventDefault(); 

        alert('El formulario enviado'); 
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" 
                value={form.nombre} 
                onChange={handleChange} />

                <p>Elige tu sabor JS favorito: </p>                
                <input type="radio" id="vanilla" name="sabor" 
                value="Vanilla" 
                onChange={handleChange} defaultChecked />
                <label htmlFor="sabor">Vanilla</label>

                <input type="radio" id="angular" name="sabor" 
                value="Angular" 
                onChange={handleChange} />
                <label htmlFor="sabor">Angular</label>

                <input type="radio" id="react" name="sabor" 
                value="React" 
                onChange={handleChange} />
                <label htmlFor="sabor">React</label>

                <input type="radio" id="vue" name="sabor" 
                value="Vue" 
                onChange={handleChange}  />
                <label htmlFor="sabor">Vue</label>

                <input type="radio" id="svelte" name="sabor" 
                value="Svelte" 
                onChange={handleChange} />
                <label htmlFor="sabor">Svelte</label>

                <p>Elige tu lenguaje de programación favorito: </p>     
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">php</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>

                <br />

                <label htmlFor="terminos">Términos y Condiciones</label>
                <input type="checkbox" id="terminos" 
                name="terminos" 
                onChange={handleChecked} />  

                <br />

                <input type="submit" />

            </form>
        </>

    ); 
}