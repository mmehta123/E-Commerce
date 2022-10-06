import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex:1;
height:75vh;
margin:5px 2px;
border-radius:5px;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
border-radius:5px;
`
const Info= styled.div`
position:absolute;
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
top:0;
`

const Title = styled.p`
font-size:35px;
font-weight:700;
color:white;   
top:0;
bottom:0; 

`
const Button = styled.button`
border:none;
margin-top:10px;
background-color:gray;
color:white;
padding:5px 10px;
border-radius:5px;
font-size:16px;
font-weight:700;
cursor:pointer;
&:hover{
    background-color:teal;
    font-weight:900;
    font-size:18px;
    font-weight:800;
}
`

const CategoriesItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoriesItem