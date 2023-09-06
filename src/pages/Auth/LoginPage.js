import React from 'react';
import Form from "../../components/form";
import authorize from "../../services/Auth";
import {useNavigate} from "react-router-dom";
import {useHTTP} from "../../contexts/HTTPProvider";

const LoginPage = () => {
    // const { set } = useAccessToken()
    const navigate = useNavigate()
    const { setNewAccessToken } = useHTTP()

    setNewAccessToken('test')




    const onLogin = async (data) => {
        const {accessToken} = await authorize(data.email, data.password)

        if (accessToken){
            // set(accessToken)
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