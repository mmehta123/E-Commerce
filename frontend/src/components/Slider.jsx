import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components';
import { sliderItems } from "../Data.js"

const Container = styled.div`
margin-top:10px;
height:100vh;
width:100%;
display: flex;
position:relative;
overflow:hidden;
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
color:white;
background-color:black;
border-radius:50%;
display: flex;
align-items:center;
justify-content:center;
position:absolute;
cursor:pointer;
opacity:0.2;
top:0;
z-index:2;
bottom:0;
left: ${({ direction }) => direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
`

const Wrapper = styled.div`
height:100%;
display:flex;
`
const Slide = styled.div`
height:100%;
width:100vw;
display:flex;
background-color:${({ bg }) => bg};
transform:translateX(${(props) => props.sliderIndex * -100}vw);
transition: 1.5s ease;

`
const ImgContainer = styled.div`
height:100%;
flex: 1;
`
const Image = styled.img`
    height:80%;
    width:100%;
`
const InfoContainer = styled.div`
height:100%;
flex:1;
margin:0 10px;
display:flex;
margin-top:-50px;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
font-size:50px;
`

const Desc = styled.p`
font-size:20px;
margin:30px 0;
letter-spacing:4px
`

const Button = styled.button`
border:none;
cursor: pointer;
padding:7px 10px;
border-radius:12px;
font-weight:bold;
font-size:20px;
&:hover{
    background-color:teal;
    color:white;
}
`
const Slider = () => {
    const [items, setItems] = useState(sliderItems);
    const [sliderIndex, setSliderIndex] = useState(0);

    const handleArrow = (val) => {
        if (val === "left") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        }else{
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleArrow("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper >
            {items.map((item) =>
                <Slide bg={item.bg} key={item.id} sliderIndex={sliderIndex}>
                        <ImgContainer >
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Get Now</Button>
                        </InfoContainer>
                    </Slide>
            )}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleArrow("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider