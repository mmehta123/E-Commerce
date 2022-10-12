import React from 'react';
import styled from 'styled-components';
import Announcment from '../components/Announcment'
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/cartRedux';

const Container = styled.div`
`;
const Wrapper = styled.div`
`;
const Title = styled.h2`
text-align: center;
font-size:25px;
`;
const TopBar = styled.div`
display:flex;
justify-content: space-between;
padding:10px;
`;
const TopTexts = styled.div`
display:flex;
align-items: center;
`;
const Button = styled.button`
border:none;
padding:10px;
font-size:20px;
margin:0 5px;
cursor:pointer;
background-color:${props => props.color === "teal" && "teal"};
color:${props => props.color === "teal" && "white"};
`;
const Text = styled.div`
margin-right: 10px;
font-weight: 600;
cursor:pointer;
text-decoration: underline;

`;
const BottomBar = styled.div`
display: flex;
padding:10px;
`;
const InfoWrapper = styled.div`
flex:7;
`;
const Info = styled.div`
display: flex;
margin:10px 0;
`;
const Image = styled.img`
width:100%;
flex:1;
height:50vh;
object-fit:cover;
`;
const Desc = styled.div`
flex:1;
padding:10px;
display:flex;
flex-direction:column;
justify-content: space-around;
font-size:20px;
`;
const ProductTitle = styled.p`
`;
const ProductId = styled.p`
`;
const ProductColor = styled.div`
height:20px;
width:20px;
border-radius: 50%;
background-color:${props => props.color};
`;
const ProductSize = styled.p`
`;
const ProductDetails = styled.div`
flex:1;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Quantitiy = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding:10px;
`;
const Number = styled.div`
border:0.2px solid teal;
padding:5px 8px;
border-radius:5px;`;

const Price = styled.p`
font-weight: 600;
font-size:30px;`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const Summary = styled.p`
border:0.5px solid gray;
border-radius: 10px;
padding:10px;
flex:3;
display:flex;
justify-content:space-around;
flex-direction: column;
max-height:50vh;
`
const SummaryTitle = styled.h3``
const SummaryPrice = styled.div`
display:flex;
justify-content: space-between;
`
const Tag = styled.p`
font-size: ${props => props.type == "total" ? 25 : 20}px;
font-weight:${props => props.type === "total" ? 700 : 500};
`;
const PriceTag = styled.p`
font-size: 18px;
font-weight: 400;
font-size: ${props => props.type == "total" ? 25 : 18}px;
font-weight:${props => props.type === "total" ? 500 : 400};
`



const Cart = () => {
    const cart = useSelector((state) => state.cart);
    
    // My Logic for plus and minus buttons not properly done
    // const dispatch=useDispatch();
    // const handleQuantity=(str,product)=>{
    //     if(str==="inc"){
    //         dispatch(addProduct({...product,quantity:1}))
    //     }else{
    //         dispatch(addProduct({...product,quantity:-1}))
            
    //     }
    // }
    return (
        <Container>
            <Announcment />
            <Navbar />
            <Wrapper>
                <Title>Your Bag</Title>
                <TopBar>
                    <Button>Continue Shopping</Button>
                    <TopTexts>
                        <Text>Shopping bag</Text>
                        <Text>Your Wishlist</Text>
                    </TopTexts>
                    <Button color="teal">Checkout Now</Button>
                </TopBar>
                <BottomBar>
                    <InfoWrapper>
                        {
                            cart?.products.map(product => (
                                <Info>
                                    <Image src={product.img} />
                                    <Desc>
                                        <ProductTitle><b>Model: </b>{product.title}</ProductTitle>
                                        <ProductId><b>ID: </b>{product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                    </Desc>
                                    <ProductDetails>
                                        <Quantitiy>
                                            {/* <Remove onClick={()=>handleQuantity("dec",product)}/> */}
                                            <Remove />
                                            <Number>{product.quantity}</Number>
                                            {/* <Add onClick={() => handleQuantity("inc", product)}/> */}
                                            <Add />
                                        </Quantitiy>
                                        <Price>{product.quantity * product.price}</Price>
                                    </ProductDetails>
                                </Info>
                            ))
                        }
                    </InfoWrapper>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryPrice>
                            <Tag></Tag>
                            <PriceTag></PriceTag>
                        </SummaryPrice>
                        <SummaryPrice>
                            <Tag>Subtotal</Tag>
                            <PriceTag>{cart.totalPrice}</PriceTag>
                        </SummaryPrice>
                        <SummaryPrice>
                            <Tag>Shipping Charge</Tag>
                            <PriceTag>0</PriceTag>
                        </SummaryPrice>
                        <SummaryPrice>
                            <Tag>Discount(10%)</Tag>
                            <PriceTag>{
                                (cart.totalPrice / 10) > 1000 ? 1000 : cart.totalPrice / 10
                            }</PriceTag>
                        </SummaryPrice>
                        <Hr />
                        <SummaryPrice>
                            <Tag type="total">Total</Tag>
                            <PriceTag type="total">{cart.totalPrice - ((cart.totalPrice / 10) > 1000 ? 1000 : cart.totalPrice / 10)}</PriceTag>
                        </SummaryPrice>
                        <Button color='teal'>Checkout Now</Button>
                    </Summary>
                </BottomBar>
            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Cart