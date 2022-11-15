import styled from 'styled-components'

export const StyledHero = styled.div`
display: flex;

padding: 10px 0;
height: auto;
margin-top: 20px;
h2{
    font-weight: normal;
}




${'' /* Small screens */}
@media screen and (max-width:580px){
display: flex;
flex-direction: column;
padding: 10px 2px;
gap: 25px;

.hero-img{
    width: 200px;
    margin-top: 8px;
}
.heading1{
    font-size: 14px;
    width: 300px;

    text-align: justify;
    h2{
        margin: 5px;
        padding: 0;
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
    margin: 2px 0;
    align-items: center;
    justify-content: space-between;
    input{
        height: 45px;
        margin: 10px 20px;
        width: 280px;
    }
    button{
font-size: 12px;
        height: 50px;
        width: 280px;
        margin: 10px 0;


    }
}
}
@media screen and (min-width:580px) and (max-width:1024px){
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
        font-size: 30px;
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
width: auto;
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
    width: 350px;

    input{
        height: 44px;
        border-radius: 8px 0px 0px 8px;

    }
    button{
        height: 44px;
        border-radius: 0px 8px 8px 0px;
        }
}
.right-div{

        padding: 0;
        margin: 0;


}
}
@media screen (min-width:1024px) {

border: 1px solid red;


}
`;