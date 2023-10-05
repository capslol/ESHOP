import React from 'react';
import Form from "../../components/form";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthProvider";

const LoginPage = () => {
    const navigate = useNavigate()
    const { login } = useAuth()


    const onLogin = async (data) => {
        const accessToken = await login(data.email, data.password)
        console.log(accessToken)

        if (accessToken){
            navigate('/')
        }
    }

    return (
        <div>
            <Form onSubmitForm={onLogin}/>
        </div>
);
};

export default LoginPage;