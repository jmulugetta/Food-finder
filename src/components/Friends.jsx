import { GroupAddRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const Friendbox = styled.div`
height: 100%;
display: flex;
flex-direction:column;
justify-content: center;
max-width: 1100px;
font-family: 'Source Code Pro', monospace;
`

const Title = styled.h1`
font-size:50px;
padding-left: 100px;
cursor:pointer;


&:hover{
    background-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`
const Input = styled.input`
display: flex;
flex-direction: column;
padding: 2vw 4vw;
width: 90%;
max-width: 600px;
border-radius: 10px;   
margin-top:20px; 
`

const Friends = () => {
  return (
    <div>
        <Container>
        
            <Friendbox>
            <Title>Friends</Title> 
        <Input placeholder='Find Friends!'></Input>
        <Input placeholder='Enter Email'></Input>
        <Input placeholder='Find Food!'></Input>

            </Friendbox>
        </Container>
    </div>
  )
}

export default Friends