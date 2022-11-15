import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;500;600;700&display=swap');


// resets
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
.times{
    background: black;
    color: black;
}
ul {
  list-style-type: none;
}
span{
    color: #A02279;
    text-transform: capitalize;
    font-weight: bold;
}
.bottom-div, .disco-div{
    background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
    color: #fff

}
.disco-div {
    p{
    color: #fff
}
button{
    background: #fff;
    color: #CE4283;
    height: 50px;
        width: 156px;
}
height: 400px;
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
.inspiration{
padding: 10px 0;
margin: 10px 0;

}
.cards-section {
  h2 {
    text-align: center;
    font-size: 2.5rem;
    padding: 2rem 1rem;
  }
}
.cards {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  border: 1px solid #D7D7D7;
  border-radius: 8px;
  display: inline-block;
  padding: 0.8rem;
  max-width: 300px;
  height: auto;

  .img-container {
    position: relative;


    img {
      width: 100%;

    }
  }
  .favorite-icon {
    position: absolute;
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
    cursor: pointer;

    path {
      stroke: black;
      stroke-width: 1;
      fill: gray;
    }
  }
  .details {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin: 8px 0;
    align-items: center;


    p{
        padding: 0;
        margin: 0;
height: auto;
    width: auto;
font-size: 13px;
display: inline;
  }
  }

  .stars {
    margin-top: 10px;
display: flex;

    svg {
      fill: #a02279;
      stroke: #a02279;
      margin-right: 5px;
    }
  }
}
.meta-nfts {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  background-color: #a02279;
  color: white;
  padding: 2rem 1rem;
  overflow: hidden;

  h2 {
    font-size: 2rem;
    text-align: center;
  }
  p {
    padding-block: 1rem;
    line-height: 1.3;
    font-weight: 400;
    color: white;
  }

  button {
    color: #a02279;
    background: white !important;
    border: 1px solid white;
    padding: 10px 16px;
    border-radius: 6px;
    width: 300px;
    font-size: 1rem;
  }
}

.images-container {


.group-img{
    width: 100%;

}

}
footer {
  background-color: black;
  color: white;
  text-align: center;
  padding: 2rem 1rem;

  ul {
    padding-block: 1rem;

    li {
      padding-block: 10px;
      font-weight: 300;
      cursor: pointer;
    }
    h3 {
      padding-bottom: 5px;
    }
  }
}
.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 1rem;
  svg {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: steelblue;
    }
  }
}
.wallet-btn-desktop {
  display: none;
}

// MARKETPLACE PAGE


.filter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  padding: 1rem;



  h3 {
    color: black-100;
    font-weight: 400;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 15px;

    text-align: left;
    display: flex;
    align-items: center;


  }

  .filter-location {
    border: 1px solid #B4B4B4;
    border-radius: 4px;
    padding: 8px 16px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    font-size: 15px;

    cursor: pointer;
  }
}

// WALLET MODAL
.wallet-modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 15;
  padding-inline: 2rem;
}
.wallets {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;

  .border-btm {
    padding: 0.9rem 1rem;
    border-bottom: 1px solid black-100;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: white;
      border: none;
      cursor: pointer;

      svg {
        font-size: 1rem;
      }
    }
  }
  .pad {
    padding: 0.9rem 1rem;
    text-align: left;

p{
  margin: 0;
  padding: 0;
}
    :nth-child(3) {
      background-color: #fff;
    }
  }

  .crypto-wallet {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
    color: black;
    font-weight: bold;
    width: 100%;
    margin-block: 15px;
    padding: 5px 8px;
    border-radius: 5px;
    border: 1px solid gray;
    position: relative;
    img {
      width: 35px;
    }
    svg {
      position: absolute;
     right: 1rem;
    }

  }
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
    height: 28px;
    padding: 5px;
}
}
h3{
    font-size: 5px;
    margin: 0 .2em;
}
.inspiration{
    font-size: 20px;
}


.details {
    display: flex;
    gap: 10px;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    padding: 0;
    h4{

        height: auto;
        text-align: left;
    }
    p{

        height: auto;
text-align: left;
        display: flex;


        margin: 0;
  }
  }
footer {
  background-color: black;

  ${'' /* color: white;
padding: 0;
  text-align: center;
  align-items: center;

  justify-content: center;
  padding: 2rem 1rem; */}
img{
  height: 45px;
  padding: 3px;
}
  ul {
    padding-block: 0rem;
    place-items: center;
margin: 0;
margin-block: 0;
padding-inline-start: 0;

    li {
      padding-block: 1.5em;
     font-weight: 300;
      cursor: pointer;
    }
    h3 {
      padding-bottom: 5px;
      font-size: 20px;
    }
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
.inspiration{
    font-size: 15px;
}
.cards {
    padding: 3rem 5rem;
  }

.meta-nfts {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 7rem;
    height: 300px;
    align-items: center;

    h2 {
      text-align: left;
      font-size: 2rem;
    }
    p {
      padding-block: 2rem;
      font-size: 1.3rem;
    }
    button {
      width: 200px;
    }
    .meta-text {
      max-width: 50%;
      text-align: left;
      h2{
        margin: 0;
        padding: 0;
      }
      p{
        font-size: 10px;
        padding: 1rem 0;
      }
      button{
        width: 90px;
        height: 35px;
        font-size: 10px;
        padding: 0;
      }
    }
.images-container{
    max-width: 60%;

}

  }


  // MARKETPLACE
  .filter {
    flex-direction: row;
    flex-wrap: wrap;
height: 100px;
width:auto;
h3{
width: 30%;

margin: 0;
}
    }
}
${'' /* big screen */}

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
line-height: 25px;
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
        margin-top: 50px;
        height: 50px;
        align-items: center;
        justify-content:center;

        .svg{
            margin-top: 10px;
            padding: 0;
        }
}
.meta-nfts {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 7rem;
    height: 500px;
    align-items: center;


 .meta-text {
      max-width: 50%;
      text-align: left;

      align-items: left;

      h2{
        margin: 0;
        padding: 0;
        text-align: left;
      font-size: 2rem;
      }
      p{
        font-size: 15px;
        padding: 1rem 0;
        max-width: 75%;

      }
      button{
        width: 90px;
        height: 35px;
        font-size: 10px;
        padding: 0;
        margin-top: 25px;
      }
    }




}

.images-container{
    max-width: 60%;
.group-img{
    height: 500px;
    padding: 30px 0;
    }

}

footer {
    padding: 2rem 7rem;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .socials {
    justify-content: start;
    padding-top: 7rem;
  }
  .copyright {
    text-align: left;
    padding-top: 10px;
    font-size: 1.2rem;
  }

  // MARKETPLACE
  .filter {
    padding-inline: 7rem;
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(65px, 1fr));

  }


    h3{
        font-size: 30px;
    }

}




`;