import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"

const Info = styled.div`
display:flex;
position: absolute;
 top: 0;
  left: 0;
background-color:rgb(200, 198, 198,0.5);;
z-index:3;
opacity: 0;
height: 100%;
width: 100%;
 align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:30%;
margin:5px;
height:350px;
min-width:250px;
background-color: #f5fbfd;
position:relative;
 &:hover ${Info}{
    opacity: 1;
  }
`

const Image = styled.img`
height:75%;
z-index:2;
`
const Circle = styled.div`
border-radius: 50%;
background-color:white;
height: 200px;
width: 200px;
position:absolute;   
`

const Icon = styled.div`
height: 40px;
width: 40px;
display:flex;
border-radius: 50%;
background-color:white;
margin:5px;
justify-content: center;
align-items: center;
 transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={"/product/" + item._id}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product