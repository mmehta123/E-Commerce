import React, { useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
const Container=styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;`

const Products = () => {
    const [items, setItems] = useState(popularProducts)
    return (
        <Container>
            {items.map(item =>
                <Product item={item} key={item.id} />
            )
            }
        </Container>
    )
}

export default Products