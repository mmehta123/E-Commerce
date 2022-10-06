import React from 'react';
import styled from 'styled-components';
import {ForwardToInbox} from '@mui/icons-material';


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:300px;
    flex-direction:column;
    background-color:rgb(224, 216, 216);
`;
const Title = styled.h2`
    text-align:center;
    font-size:50px;
    font-weight:900;
`;
const Desc = styled.div`
    text-align:center;
    font-size:20px;
    font-weight:300;
    margin:5px 0;
`;
const InputContainer = styled.div`
display:flex;
width:50%;
margin-top:10px;
height:40px;
justify-content: space-between;
background-color:white;
`;
const Input = styled.input`
outline:none;
border:none;
padding:5px;
flex:8;
font-size:14px;
`;
const Button = styled.button`
flex:1;
cursor:pointer;
border:none;
outline:none;
background-color:teal;
&:hover{
    color:white;
}
`;
const Icon = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const Newsletter = () => {
    return (
        <Container>
            <Title>News Letter</Title>
            <Desc>Get 10% off upto 5000 using HDFC Bank credit card</Desc>
            <InputContainer>
                <Input placeholder="write your message" />
                <Button>
                    <Icon >
                        <ForwardToInbox />
                    </Icon>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter