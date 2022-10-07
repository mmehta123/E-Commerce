import React from 'react';
import styled from 'styled-components';
import Announcment from '../components/Announcment'
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';

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
                        <Info>
                            <Image src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                            <Desc>
                                <ProductTitle><b>Model: </b>asics neoPrime3</ProductTitle>
                                <ProductId><b>ID: </b>#12231</ProductId>
                                <ProductColor color="gray" />
                                <ProductSize><b>Size: </b>30 EU</ProductSize>
                            </Desc>
                            <ProductDetails>
                                <Quantitiy>
                                    <Remove />
                                    <Number>2</Number>
                                    <Add />
                                </Quantitiy>
                                <Price>5499</Price>
                            </ProductDetails>
                        </Info>
                        <Info>
                            <Image src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                            <Desc>
                                <ProductTitle><b>Model: </b>asics neoPrime3</ProductTitle>
                                <ProductId><b>ID: </b>#12231</ProductId>
                                <ProductColor color="gray" />
                                <ProductSize><b>Size: </b>30 EU</ProductSize>
                            </Desc>
                            <ProductDetails>
                                <Quantitiy>
                                    <Remove />
                                    <Number>2</Number>
                                    <Add />
                                </Quantitiy>
                                <Price>5499</Price>
                            </ProductDetails>
                        </Info>
                    </InfoWrapper>
                    <Hr/>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryPrice>
                            <Tag></Tag>
                            <PriceTag></PriceTag>
                        </SummaryPrice>
                        <SummaryPrice>
                            <Tag>Subtotal</Tag>
                            <PriceTag>10,900</PriceTag>
                        </SummaryPrice>
                        <SummaryPrice>
                            <Tag>Shipping Charge</Tag>
                            <PriceTag>0</PriceTag>
                        </SummaryPrice>
                        <SummaryPrice>
                            <Tag>Discount</Tag>
                            <PriceTag>1,090</PriceTag>
                        </SummaryPrice>
                        <Hr/>
                        <SummaryPrice>
                            <Tag type="total">Total</Tag>
                            <PriceTag type="total">9810</PriceTag>
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