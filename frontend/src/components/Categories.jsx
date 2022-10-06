import React from 'react'
import { useState } from 'react'
import { categories } from '../data.js'
import CategoriesItem from "../components/CategoriesItem.jsx"
import styled from 'styled-components'

const Container = styled.div`
display:flex;
`
const Categories = () => {
    const [catData, setCatData] = useState(categories);
    return (
        <Container>
            {catData.map(item =>
                <CategoriesItem item={item} key={item.id}/>
            )
            }
        </Container>
    )
}

export default Categories