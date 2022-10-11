import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcment from '../components/Announcment'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
const Container = styled.div``;

const Title = styled.h2`margin:5px;`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
margin:10px;
`;
const Filter = styled.div``;

const Span = styled.span`
font-weight: 700;
margin-right:5px;`;

const Select = styled.select`
padding:5px;
outline:none;
margin-right: 20px;`;

const Option = styled.option``;


const ProductList = () => {
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const location = useLocation();
    const cat = location.pathname.split("/")[2]

    const handleFilter = (e) => {
        const val = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: val.toLowerCase()
        });
    }
    return (
        <Container>
            <Announcment />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <Span>Filter Products</Span>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled >
                            Color
                        </Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Sky Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled >
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Span>Sort Products</Span>
                    <Select onChange={(e) => { setSort(e.target.value) }}>
                        <Option >Newest</Option>
                        <Option>Low To High</Option>
                        <Option>High To Low</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filter={filter} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList