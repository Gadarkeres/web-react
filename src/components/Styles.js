import  styled, { css }  from "styled-components";

export const Container = styled.section`
position:absolute;
backdrop-filter: blur(3px);
width:100%;
height:100%;
top:0;
left:0;
bottom:0;
z-index:5;
display:flex;
align-items:center;
justify-content:center;


background: rgb(1,1,255);
background: linear-gradient(13deg, rgba(1,1,255,0.5102415966386555) 22%, rgba(25,25,27,0.8687850140056023) 95%);


opacity:0;
pointer-events:none;     /* <<< colocar caso fazer o menu por cima da pagina */
transition:.5s;



.close{
    position: absolute;
    top:1rem;
    right:1rem;
    cursor:pointer;
    color:white;
    transform:rotate(45deg);
    transition: .7s;

}
nav{
    display:flex;
    align-items:center;
    flex-direction: column;
    
    

}
nav, ul, a{
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    text-align:center;
   
    
}
.button{
    display: flex;
    gap: 0.5em;
    background-color: #0F1020;
    color: white;
    font-size: 1.1em;
    padding: 0.7em 1em;
    border: 1px solid  #84C318;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    
  }
  nav, ul, li{
    margin-bottom:4rem;
    list-style-type:none;
  }

  ${({isVisible}) => isVisible && css`
    opacity:1;
    pointer-events:auto;
 
.close{ 
    transform:rotate(0deg);
}
`} 

`;