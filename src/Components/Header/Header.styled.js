import styled from 'styled-components'

export const StyledHeader = styled.header`
.icon{
    color: #8043D8;
    cursor: pointer;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
}
display: flex;
justify-content: space-around;


.logo-img{
    height: 36.67px
}
.connect-btn {
height: 45px;
width: 170px;
border-radius: 10px;
}
nav{
display: flex;
align-items: center;

gap: 10px;

    .nav-links{
        color: #434343;
        text-decoration: none;

    }
    .nav-links:hover, .nav-links:active{
        color: #CE4283;
        transition: all 0.5s ease-in;


    }
    .nav-links:active{
        text-decoration: underline;
        transition: linear 0.5s ease-in;
    }

}

.mobileNav{
    height: 400px;
    position: fixed;
    top: 0;
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
.logo-img{

padding: 20px;
padding-left: 10px;
height: 25px;

}
${'' /* small */}
@media screen and (max-width:680px){
#connect{
    display: none;

}

display: flex;
justify-content: flex-start;

.icon{
    display: block;
    position: fixed;
    right: 10px;
    top: 13px;
    z-index: 1000;
    height: 18px;

}

.desktopNav{
    display: none;
}
.logo-img{
    height: 25px;
    width: auto;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    margin-left: 10px;

}
.connect-btn {
height: 40px;
width: 120px;
border-radius: 10px;
}
.mobileNav{
    display: flex;
    top: 0;
    height: 300px;

}
}

${'' /* tabs */}
@media screen and (min-width:680px) and (max-width:1024px){
.mobileNav{
    display: flex;
    top: 0;
    height: 300px;

}
#connect{
    display: none;

}
display: flex;
justify-content: flex-start;
padding: 10px;

.icon{
    display: block;
    position: fixed;
    right: 25px;
    top: 15px;
    z-index: 1000;
    height: 21px;

}

.desktopNav{
    display: none;
}
.logo-img{

    height: 25px;
    width: auto;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    margin-left: 10px;




}

}
${'' /* desktop */}
@media screen and (min-width:1020px){

display: flex;
justify-content: space-between;
padding: 10px;
margin: 0 15px;
margin-top: 5px;

.mobileNav, .icon{
    display: none;
}
.logo-img{
    height: 30px;
    width: auto;
  margin: 0;
  padding: 0;
}
nav{



.nav-links{
padding: 0 10px;
margin: 10px;
font-size: 15px;
line-height: 20px;
    }


}
.connect-btn{
height: 45px;
width: 170px;
border-radius: 10px;



:hover{
cursor: pointer;
background: #fff;
color: #CE4283;
text-decoration: underline;
}
}
}

`;