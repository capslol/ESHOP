import React from 'react';
import Form from "../../components/form";
import useAccessToken from "../../hooks/useAccessToken";
import login from "../../services/service";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const { set } = useAccessToken()
    const navigate = useNavigate()


    const onLogin = async (data) => {
        const user = await login(data.email, data.password)

        if (user.accessToken){
            set(user.accessToken)
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