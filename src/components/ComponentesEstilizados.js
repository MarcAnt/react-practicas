import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components"; 
//Los styled componentes permiten usar template strings para poder hacer uso de css o sass
export default function ComponentesEstilizados() {

    let mainColor = '#db7093', mainAlphaColor80 = '#db709380'; 
    
    const setTransitionTime = (time) => `all ${time} ease-out`; 

    //Usando keyframes
    const fadeIn = keyframes`
        0% {
            opacity: 0; 
        }

        100% {
            opacity: 1; 
        }
    `; 

    const myH3 = styled.h3`
        padding: 2rem;
        text-align: center; 
        color: ${(props) => props.color}; 
        color: ${({color}) => color}; 
        color: ${({color}) => color || '#000'}; 
        background-color: ${mainColor}; 
        transition: ${setTransitionTime("1s")}; 
        ${({isButton}) => isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: .25rem; 
            cursor: pointer; 
        `}
        &:hover {
            background-color: ${mainAlphaColor80}; 
        }
        animation: ${fadeIn} 5s ease-out; 
    `; 

    //Usando ThemePrivider

    const light = {
        color: "#222",
        bgColor: "#DDD"
    };

    const dark = {
        color: "#DDD",
        bgColor: "#222"
    };    

    const Box = styled.div`
        padding: 1rem; 
        margin: 1rem; 
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `; 

    //Así hereda los estilos de Box
    const BoxRounded = styled(Box)`
        border-radius: 1rem; 
    `; 


    //Estilos globales - estilos por lo general global que van en index.js o para resetear 

    const GlobalStyle = createGlobalStyle`

        h2 {
            padding: 2rem; 
            background-color: #fff;
            color: #61dafb; 
            text-transform: uppercase;   
        }


    `; 
    
    return(

        <>
            <GlobalStyle />
            <h2>Styled Components</h2>
            <myH3>Hola, soy un h3 estilizado con estyled-components</myH3>
            <myH3 color="#666666" >Hola, soy un h3 estilizado con estyled-components</myH3>
            <myH3 isButton >Hola, soy un h3 estilizado como botón</myH3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja Light</Box>
                <BoxRounded>Soy una caja redondeada Light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja Dark</Box>
                <BoxRounded>Soy una caja redondeada Dark</BoxRounded>
            </ThemeProvider>
        </>

    ); 

}