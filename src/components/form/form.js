import React, {useState} from 'react';
import './form.css'

import {loginUser} from "../../services/Auth";
import {useForm} from "react-hook-form";

const Form = ({onSubmitForm}) => {
    // hook-form
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: '',
            password: ''
        }
    })




    return (
        <div className='container'>
            <form className='form' action="src/components/form" onSubmit={handleSubmit(onSubmitForm)}>
                <h2>Login</h2>
                <label htmlFor=""> <span>Email</span>
                    <input {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                    })}/>
                </label>
                <div>{errors?.email && <p>{errors?.email?.message}</p>}</div>

                <label htmlFor=""><span>Password</span>
                    <input
                        type={"password"}
                        {...register('password', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 4,
                                massage: 'минимум 5 символов'
                            }
                        })}/>
                </label>
                <input  type='submit' disabled={!isValid}></input>
            </form>

        </div>
    );
};

export default Form;