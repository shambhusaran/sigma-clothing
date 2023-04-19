import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cabin', sans-serif;


}
html { 
    font-size:62.5%;
   
}
body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1 {
    font-size: 8rem;
    font-weight: 700;
    color: ${({theme})=>theme.colors.white};
    line-height: 1;
    margin-bottom:2rem ;
}

h2 {
    font-size: 4.4rem;
    font-weight: 300;
    color: ${({theme})=>theme.colors.white};
    white-space : normal;
    text-align: center;
}

h3 {
    font-size: 1.8rem;
    color: ${({theme})=>theme.colors.white};
    font-weight: 400;
}

p {
    color: ${({theme})=>theme.colors.white};
    ${'' /* opacity: .7; */}
    font-size: 1.8rem;

    margin-top: 1rem;
    font-weight: 400;
    line-height: 3rem;
    margin-bottom: 4rem;



}

`;
