import styled from 'styled-components';


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
const Wraapper = styled.div`
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
const Forget= styled.a`
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
`



const Login = () => {
    return (
        <Container>
            <Wraapper>
                <Title>Login</Title>
                <InputContainer>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" type="password" />
                </InputContainer>
                <Forget href='http://localhost:3000/'>Don't Remember Password</Forget>
                <Button>SIGN IN</Button>
            </Wraapper>
        </Container>
    )
}
export default Login;