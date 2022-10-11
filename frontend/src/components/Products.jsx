import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios";

const Container = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;`

const Products = ({ sort, cat, filter }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(cat ? "http://localhost:5000/api/products?cat=" + cat : "http://localhost:5000/api/products/");
            setProducts(res.data);
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat && setfilteredProducts(
            products.filter(item =>
                Object.entries(filter).every(([key, value]) =>
                    item[key].includes(value))
            )
        )
    }, [cat, products, filter]);
    // first it will fetch every item (every object) of products array. then inside the filter function it will
    // find all the entries of incoming filter object and will give [[key,value],[key,value],....] now every 
    // fuction traverse through every item of resulted entries array and destructure the key and value of every
    // entry  finally check our each existing products have value same as we wanted in our filter with key and
    // value coming from every method(from filter eg. color(key) and blue(value)  cheked in products array).   

    useEffect(() => {
        if (sort === "Newest") {
            setfilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }
        else if (sort === "Low To High") {
            setfilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price))
        } else {
            setfilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort]);

    return (
        <Container>
            { cat ?
            filteredProducts.map(item =>
                <Product item={item} key={item._id} />
                ) : products.map(item =>
                    <Product item={item} key={item._id} />
                )
            }
        </Container>
    )
}

export default Products