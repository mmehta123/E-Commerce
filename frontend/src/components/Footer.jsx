import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, LocationOn,LocalPhone,Mail } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content:space-between;
margin:10px;
`;

const Left = styled.div`
margin:3px;
flex:1;
`
const Logo = styled.h2`
font-size:40px;
`;
const About = styled.p`
font-size:14px;
font-weight:400;

`;
const SocialContainer = styled.div`
display:flex;

`;
const Icon = styled.div`
margin:10px 4px;
cursor:pointer;
border-radius:50%;
width:40px;
height:40px;
color:white;
background-color:${(props) => props.color};
display:flex;
justify-content:center;
align-items:center;
`;

const Center = styled.div`
flex:1;
margin-left:5px;`

const Title = styled.h3`
margin:10px 0;
`
const Ul = styled.ul`
list-style-type: none;
display: flex;
flex-wrap: wrap;
margin:0;
padding:0;
`;

const ListItem = styled.li`
flex:50%;
margin-bottom:10px;
cursor:pointer;
`;


const Right = styled.div`
flex:1;
`;

const ContactRow = styled.div`
display:flex;
margin-top:6px;
align-items:center;
`;
const ContactIcon = styled.div`
margin-right:5px;
`;
const ContactData = styled.p``;




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E-Commerece</Logo>
                <About>We are founded in 2011 by E-com mall and solutions.Our CEO Mr. Mohit Mehta Came up with the idea of products services at every home without any discomfort</About>
                <SocialContainer>
                    <Icon color="#3b5999">
                        <Facebook />
                    </Icon>
                    <Icon color="#e4405f">
                        <Instagram />
                    </Icon>
                    <Icon color="#55acee">
                        <Twitter />
                    </Icon>
                    <Icon color="#e60023">
                        <Pinterest />
                    </Icon>
                    <Icon color="#3b5999">
                        <LinkedIn />
                    </Icon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <Ul>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Kids Fashion</ListItem>
                    <ListItem>Infant Products</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                </Ul>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactRow>
                    <ContactIcon><LocationOn /></ContactIcon>
                    <ContactData>New Delhi, India </ContactData>
                </ContactRow>
                <ContactRow>
                    <ContactIcon><LocalPhone /></ContactIcon>
                    <ContactData>+91 7988857701</ContactData>
                </ContactRow>
                <ContactRow>
                    <ContactIcon><Mail /></ContactIcon>
                    <ContactData>mohitmehta@gmail.com</ContactData>
                </ContactRow>
                {/* <Payment>

                </Payment> */}
            </Right>
        </Container>
    )
}
export default Footer