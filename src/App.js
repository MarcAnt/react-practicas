import React from 'react'; 
import logo from './logo.svg';


import Componente from './components/Componente'; 
import Propiedades from './components/Propiedades'; 
// import Estado from './components/Estado'; 
// import RenderizadoCondicional from './components/RenderizadoCondicional'; 
// import RenderizadoElementos from './components/RenderizadoElementos'; 
// import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'; 
// import ComunicacionComponentes from './components/ComunicacionComponentes'; 
// import CicloVida from './components/CicloVida'; 
// import AjaxApis from './components/AjaxApis'; 

// import ContadorHooks from './components/ContadorHooks'; 
// import ScrollHooks from './components/ScrollHooks'; 
// import RelojHooks from './components/RelojHooks'; 
// import AjaxHooks from './components/AjaxHooks'; 
// import HooksPersonalizados from './components/HooksPersonalizados'; 
// import Referencias from './components/Referencias'; 
import Formularios from './components/Formularios'; 
import Estilos from './components/Estilos'; 
import ComponentesEstilizados from './components/ComponentesEstilizados'; 

import './App.css';
function App() {
  let nombre = 'Marcos'; 
  let auth = false; 
  let estaciones =  ['primavera', 'verano', 'otoño', 'invierno']; 
  return (
    <>
    <div className="App">
      <header className="App-header">
        <section>
          
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre"/> 
          <h1>{nombre}</h1>
          <p>{ auth ? 'El usuario está logueado' : 'El usuario NO está logueado' }</p>
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>

          <ul>

              {estaciones.map( (el, index) => <li key={index}>{el}</li>)}

          </ul>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </section>
        <section>

            <Componente msg="Hola, soy un componente"/>
            <hr/>
            
            <Propiedades 
            cadena="Estos es una cadena de texto" 
            numero={19} 
            booleano={false}
            arreglo={[1,2,3]} 
            objeto={{ nombre: 'Marcos', correo: 'bymarcant@gmail.com' }}
            funcion={(num) => num * num}
            elementoReact={ <i>Esto es un elemento de React</i> }
            componenteReact={ <Componente msg="Hola, soy componente pasado como props"/>}
            />
          <hr/>
          {/* <Estado/>      
          <hr/>
          <RenderizadoCondicional />
          <hr/>
          <RenderizadoElementos />
          <hr/>
          <EventosES6 />
          <hr/>
          <EventosES7 />
          <hr/>
          <MasSobreEventos />
          <hr/>
          <ComunicacionComponentes />
          <hr/>
          <CicloVida />
          <hr/>
          <AjaxApis />
          <hr/>
          <ContadorHooks titulo="Seguidores" />
          <hr/>
          <ScrollHooks  />
          <hr/>
          <RelojHooks  /> */}
          <hr/>
          {/* <AjaxHooks  />
          <HooksPersonalizados  />
          <Referencias  /> */}
          <Formularios  />
          <hr/>
          <br/>
          <br/>
          <br/>
          <Estilos  />
          <hr/>
          <ComponentesEstilizados  />
        </section>
      </header>


    </div>
    </>
  );
}

export default App;

