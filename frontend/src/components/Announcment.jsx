import { Notifications } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components";

const Container=styled.div`
font-size:14px;
font-weight:400;
display:flex;
justify-content:center;
align-items:center;
background-color:teal;
padding:4px;
color:white;
`
const Announcment = () => {
  return (
    <Container>
        <Notifications style={{height:'20px',marginRight:"10px"}}/>
        Minimum 50% off on Electronic accessories
    </Container>
  )
}

export default Announcment