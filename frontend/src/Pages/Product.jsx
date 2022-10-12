import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Announcment from '../components/Announcment';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { useLocation } from "react-router-dom";
import {useDispatch} from "react-redux";    //useDispatch for triggering addProduct action
import axios from 'axios';
import { addProduct } from "../redux/cartRedux"     //added addProduct action from cartSlice from cartRedux.js

const Container = styled.div``;
const Wrapper = styled.div`
margin:10px 0;
border:0.5px solid gray;
border-radius:5px;
display:flex;
`;

const ImageContainer = styled.div`
flex:1;
padding:10px;
`

const Image = styled.img`
width: 100%;
object-fit: cover;
height: 500px;
border-radius: 5px;
;
`

const InfoContainer = styled.div`
padding:0 10px;
flex:1;`

const Title = styled.h2`
font-size:50px;
font-weight:700;
text-align:center;`

const Desc = styled.p`
margin:10px 0;`

const Price = styled.p`
font-weight:200;
font-size:40px;`

const FilterContainer = styled.div`
display:flex;
width:50%;
flex-wrap:wrap;
`

const Filter = styled.div`
flex:35%;
margin:20px 0;
display:flex;
justify-content: center;
align-items: center;
`

const FilterTitle = styled.span``;

const FilterColor = styled.div`
height: 20px;
width: 20px;
margin:5px;
border-radius: 50%;
background-color: ${props => props.color};
cursor:pointer;
&:hover {
    outline: 1px solid gray;
}
`

const Select = styled.select`margin-left:10px; padding:5px;`
const Option = styled.option`padding:5px;`

const AddContainer = styled.div`
  width: 50%;
  margin:10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
  background-color: #f8f4f4;
  }
`;


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const dispatch=useDispatch();

    const handleAddToCart=()=>{
        dispatch(addProduct({...product,quantity,color,size}));           //triggered to add quantity product and quantity are in payload form
    }


    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get("http://localhost:5000/api/getproduct/" + id);
            setProduct(res.data);
        }
        getProduct();
    }, [location]);

    const handleQuantity = (val) => {
        if (val === "add") {
            if (quantity < 10) {
                setQuantity((prev) => prev + 1);
            }
        }
        else {
            quantity > 1 && setQuantity((prev) => prev - 1);
        }
    }

    return (
        <Container>
            <Announcment />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        {product.title}
                    </Title>
                    <Desc>
                        {product.title}
                    </Desc>
                    <Price>{product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c, index) =>
                                <FilterColor color={c} key={index} onClick={() => setColor(c)} />
                            )
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select onChange={(e) => setSize(e.target.value)}>
                                {product.size &&
                                    product.size.map((s, index) =>
                                        <Option key={index}>{s.toUpperCase()}</Option>
                                    )}
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("sub")} />
                            <Amount >{quantity}</Amount>
                            <Add onClick={() => handleQuantity("add")} />
                        </AmountContainer>
                        <Button onClick={handleAddToCart}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product