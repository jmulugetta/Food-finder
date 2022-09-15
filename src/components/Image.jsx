import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: var(--overlay);
color: #fff;
height: 100vh;
width: 100%;
position: relative;
background-color: black;

&:before{
    content: '';
    background: url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60') no-repeat center center/cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.4;
    
}
`
const Content = styled.div`
height: 100%;
display: flex;
justify-content: center;
max-width: 1100px;
margin: auto;
opacity:1;
`

const Info = styled.p`
padding-top: 230px;
font-size: 7rem;
color:white;
opacity:1;
z-index:2;
`


const Image = () => {
  return (
    <Container>
    <Content>
        <Info>Find good food, with good people.</Info>
    </Content>
</Container>
  )
}

export default Image