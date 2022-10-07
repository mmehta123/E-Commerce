import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    background:  linear-gradient(
      rgba(190, 179, 179, 0.5),
      rgba(163, 84, 84, 0.5)
    ),url("https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height: 100vh;
`;
const Wraapper = styled.div`
padding:20px;
width:40%;
background-color:white;
`;

const Title=styled.h2`
font-size:30px;
text-align:center;
font-weight:700px;`

const InputContainer = styled.div`
display:flex;
flex-wrap: wrap;
margin-top: 10px;
`;

const Input = styled.input`
flex:35%;
margin:10px;
border:none;
width:100%;
outline:0.5px solid gray;
padding:5px;
font-size: 16px;
`;

const Agree= styled.p`
font-size: 16px;
margin-left: 10px;
`
const Button = styled.button`
    border:1px solid teal;
    background: none;
    padding:5px;
    margin:10px;
    font-size: 18px;
    &:hover {
        background-color:#e7e0e07e;
    }
`



const Register = () => {
    return (
        <Container>
            <Wraapper>
                <Title>Register</Title>
                <InputContainer>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" type="password" />
                    <Input placeholder="Confirm Password" type="password" />
                </InputContainer>
                <Agree>By creating an account, <b>I Agree</b> to all the terms and conditions</Agree>
                <Button>CREATE ACCOUNT</Button>
            </Wraapper>
        </Container>
    )
}

export default Register