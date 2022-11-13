import styled from 'styled-components'

export const StyledHero = styled.div`
display: flex;

h2{
    font-weight: normal;
}



.search-div{
    display: flex;
    flex-direction: column;
    input{
        opacity: 0.6;
border-radius: 4px;
height: 45px;
width: 390px;
    }
    button{

height: 54px;
width: 230px;



    }
}
@media screen and (max-width:768px){
    display: flex;
flex-direction: column;
padding: 10px 2px;
gap: 25px;
.hero-img{
    width: 250px;
}
.heading1{
    font-size: 15px;
    width: auto;
    padding: 0 20px;
    text-align: center;
    h2{
        margin: 5px;
    }

}
p{
padding: 2px 15px;
line-height: 20px;
}
.left-div{
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.search-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
height: 45px;
margin: 10px 20px;
width: 300px;
    }
    button{

height: 54px;
width: 300px;
margin: 10px 20px;


    }
}
}
@media screen and (min-width:768px){
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
    height: 450px;
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
height: 102px;
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
    max-width: 100%;

    input{
        height: 54px;
        border-radius: 8px 0px 0px 8px;

    }
    button{
        height: 54px;
        border-radius: 0px 8px 8px 0px;
        }
}
.right-div{

        padding: 0;
        margin: 0;



    .hero-img{
        height:500px;

        width: 450px;

        }
    }

}
`;