import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCart } from '@mui/icons-material/';
import Badge from '@mui/material/Badge';


const Container = styled.div`
    height:50px;
`;

const Nav = styled.div`
display:flex;
padding:10px 20px;
flex-direction: space-between;
`;
// LEFT
const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`
const Language = styled.div`
font-size:14px;
cursor:pointer;`;

const SearchContainer = styled.div`
border:1px solid black;
border-radius:10px;
display:flex;
align-items: center;
margin-left:25px;
padding:2px
`
const Input = styled.input`
border:none;
outline:none;
`


// CENTER
const Center = styled.div`
flex:1;
`
const Logo = styled.h1`
font-size:24px;
text-align:center;
font-weight:bold`

// RIGHT
const Right = styled.div`
flex:1; 
display:flex;
justify-content: flex-end;
align-items: center;
`
const MenuItem = styled.div`
font-size:20px;
cursor:pointer;
margin-left:14px;`


const Navbar = () => {
    return (
        <Container>
            <Nav>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-commerce</Logo>
                </Center>
                <Right>

                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Nav>
        </Container>
    )
}

export default Navbar