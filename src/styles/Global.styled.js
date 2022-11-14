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
.search-div{
    display: flex;

    input{
        opacity: 0.6;
        border-radius: 4px;

        width: 390px;
    }
    button{

        height: 54px;
        width: 230px;
    }
}
@media screen and (max-width:300px){

}
@media screen and (max-width:580px){
.left-div{
    width: 300px;
	margin: auto;
    margin-top: 10px;
    .heading1{
        width: 100%;
        padding: 0;
    }
}
.hero-img{

}
.right-div{
    margin: auto;
    width: 300px;
	margin: auto;
}
.p-tag{
    margin: 10px 0;
    p{
        text-align: justify;
    }
}
.bottom-div {
display: flex;
flex-direction: row;
margin-top: 30px;

.svg {
    height: 20px;
    padding: 5px;
}
}

}
@media screen and (min-width:580px) and (max-width:1024px){
.right-div {

padding: 0;
margin: 0;
    .hero-img{
        padding: 0;
        margin: 0;
        height: 200px;
        width: auto;
        object-fit: contain;
}
.p-tag{
 width: 300px;
}

}

}

@media screen and (min-width:1024px){
    display: flex;
align-items: center;
justify-content:center;
margin-top: 30px;
margin-bottom: 50px;
padding: 0 10px;
gap: 5px;


.left-div, .right-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    width: 50%;
.heading1{
    width: auto;
}

h2{
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        letter-spacing: -0.02em;
}
}


.left-div{
    align-items: flex-start;
    padding-left: 35px;
    margin-left: 35px;

}

p{
padding: 0;
margin-top: 15px;
margin-bottom: 5px;
width: auto;
height: 80px;
font-family: 'Red Rose';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 35px;
color: #434343;
text-align:left;

}
.search-div{
    display: flex;
    flex-direction: row;

    margin-top: 38px;
    width: 100%;

    input{
        height: 54px;
        border-radius: 8px 0px 0px 8px;
        max-width: 50%;

    }
    button{
        height: 54px;
        border-radius: 0px 8px 8px 0px;
        }
}
.right-div{

        padding: 0;
        margin: 0;




}
.hero-img{
        padding: 0;
        margin: 0;
        height: auto;
        width: auto;
        object-fit: contain;
}
.bottom-div{
        margin-top: 40px;
        height: 50px;
        align-items: center;
        justify-content:center;

        .svg{
            margin-top: 10px;
            padding: 0;
        }
    }
}




`;