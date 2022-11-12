import styled from 'styled-components'

export const StyledHeader = styled.header`
.icon{
    color: #8043D8;
    cursor: pointer;
}
display: flex;

.logo-img{
    height: 36.67px
}
nav{
display: flex;
gap: 10px;

    a{

        color: #434343;

        text-decoration: none;





    }
    a:hover, a:active{
        color: #CE4283;
        transition: all 0.5s ease-in;
        text-decoration: underline;

    }
    a:active{
        text-decoration: underline;
        transition: linear 0.5s ease-in;
    }

}

${'' /* small */}
@media screen and (max-width:548px){

display: flex;
height: 8vh;
.icon{
    display: block;
    position: fixed;
    right: 20px;
    top: 23px;
    z-index: 1000;
}

.desktopNav{
    display: none;
}
.logo-img{
    height: 25px;
    width: auto;
    padding: 10px;


}
.mobileNav{
    height: 100vh;
    position: fixed;
    top: 10px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
    z-index: 100;

    padding: 20px 2px;
    background-color:#fff;

    transition-duration:1000ms;
}

}

${'' /* tabs */}
@media screen and (min-width:548px) and (max-width:768px){
    .mobileNav, .icon{
    display: none;
}

}
${'' /* desktop */}
@media screen and (min-width:768px){
    .mobileNav, .icon{
    display: none;
}

}

`;