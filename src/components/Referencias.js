// import React, {createRef, useRef} from 'react';
import React, {useRef} from 'react';

//Las referencias permiten no usar id para usar elementos ya colocados en el DOM

export default function Referencias() {

    // let refMenu = createRef(), //Para los class components
    let refMenu = useRef(), 
    refMenuBtn = useRef(); 

    const handleToggleMenu = (e) => {

        // const $menu = document.getElementById("menu"); 
        if (refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = 'Cerrar'; 
            refMenu.current.style.display = 'block'; 
        } else {
            refMenuBtn.current.textContent = 'Menú'; 
            refMenu.current.style.display = 'none'; 
            
        }
    }


    return(

        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav id="menu" style={{display: "none"}} ref={refMenu}>
                <a href="#">Sección 1</a>
                <br/>
                <a href="#">Sección 2</a>
                <br/>
                <a href="#">Sección 3</a>
                <br/>
                <a href="#">Sección 4</a>
                <br/>
            </nav>
        </>
    ); 
}