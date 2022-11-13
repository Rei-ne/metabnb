import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;500;600;700&display=swap');

body{
font-family: 'Red Rose', sans-serif !important;
text-align: center;
margin: 0;
padding: 0;
}
button{
background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
color: #fff;
border-radius: 10px;
border: none;
}
span{
    color: #A02279;
    text-transform: capitalize;
    font-weight: bold;
}
.bottom-div{
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);

}
p{
    font-size: 13px;
    margin: 0;
    padding: 10px;

}
svg{
    height: 30px;
}

`;