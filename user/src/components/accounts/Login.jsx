import React, { useState,useContext } from 'react';
import styled from '@emotion/styled';
import { TextField, Box, Button,Typography } from '@mui/material';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import {useNavigate} from 'react-router-dom';

const Component =styled(Box)`
width :400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 175,
    display: 'flex',
    margin: 'auto',
    padding: '5px 0 0'
});

const Wrapper = styled(Box)`
    padding: 5px 30px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #d69f02;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Error= styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({isUserAuthenticated}) => {

    const [ account , toggleAccount] = useState('login');
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error,setError] = useState('');
    const{setAccount} =useContext(DataContext);
    const navigate= useNavigate();


    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }


    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
     
    const signupUser =async()=>{
       let response = await API.userSignup(signup);
       if(response.isSuccess){
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login');
       } else{
        setError('Something us wrong');
       }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError('');
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ username: response.data.username,name:response.data.name})

            isUserAuthenticated(true);
            navigate('/');
        } else {
            setError('Something went wrong! please try again later');
        }
    }
   // https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png

return (
    
        <Component>
            <Box>
                <Image src="https://thumbs.dreamstime.com/b/blogger-hashtag-poster-grunge-background-social-media-design-141138135.jpg" alt="blog" />{
                    account ==='login' ?
                <Wrapper>
                    <TextField variant='standard' value={login.username} onChange={(e) => onValueChange(e)} name="username" label='Enter Username'></TextField>
                    <TextField variant='standard'  value={login.password}   onChange={(e) => onValueChange(e)} name="password" label='Enter Password'></TextField>
                    {error && <Error>{error};</Error>}
                    <LoginButton variant='contained' onClick={()=> loginUser()}>Login</LoginButton>
                    <Typography style ={{textAlign: 'center'}}>OR</Typography>
                    <SignupButton onClick={() => toggleSignup()}> Create an account</SignupButton>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant='standard'  onChange={(e) => onInputChange(e)} name="name" label='Enter Name'></TextField>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name="username"  label='Enter Username'></TextField>
                    <TextField variant='standard'   onChange={(e) => onInputChange(e)} name="password" label='Enter Password'></TextField>
            
            
                    {error && <Error>{error};</Error>}
                    
                    <SignupButton onClick={()=> signupUser()}>Signup</SignupButton>
                    <Typography style ={{textAlign: 'center'}}>OR</Typography>
                    <LoginButton variant='contained' onClick={() => toggleSignup()}> Already have an account</LoginButton>
                </Wrapper>
}
            </Box>
            
        </Component>
)
}

export default Login;
