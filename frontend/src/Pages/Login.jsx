import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from "../redux/api";


const Container = styled.div`
    background:  linear-gradient(
      rgba(190, 179, 179, 0.5),
      rgba(163, 84, 84, 0.5)
    ),url("https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height: 100vh;
`;
const Wrapper = styled.div`
padding:20px;
width:40%;
background-color:white;
`;

const Title = styled.h2`
font-size:30px;
text-align:center;
font-weight:700px;`

const InputContainer = styled.div`
width:100%;
margin-top: 10px;
display:flex;
justify-content: center;
flex-direction: column;
`;

const Input = styled.input`
margin:10px;
border:none;
outline:0.5px solid gray;
padding:8px;
font-size: 18px;
`;
const Forget = styled.a`
display:block;
margin:10px;
text-decoration:none;
`

const Button = styled.button`
    border:1px solid teal;
    background: none;
    padding:5px;
    margin:10px;
    font-size: 18px;
    &:hover {
        background-color:#e7e0e07e;
    }
    &:disabled{
        background-color:#c94141;
        cursor:none;
        color:black;
        }
`

const Error = styled.span`
color:red;
font-size:15px;
margin-left:7px;
font-weight: 400;
`



const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.user);
    console.log(state);


    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, username, password);
    }

    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <InputContainer>
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    {state.error && <Error>Something went Wrong...</Error>}
                </InputContainer>
                <Forget href='http://localhost:3000/'>Don't Remember Password</Forget>
                <Button onClick={handleLogin} disabled={state?.isFetching}>SIGN IN</Button>
            </Wrapper>
        </Container>
    )
}
export default Login;