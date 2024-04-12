import React, {ChangeEvent, FC, FormEvent, useState} from 'react';

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm = () => {
    const [newPizza, setNewPizza] =
        useState<{title: string, price: string, img:string}>(initState)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                name="title"
                type='text'
                placeholder='Название'
                onChange={handleChange}
                value={newPizza.title}
            >
            </input>
            <input
                name="price"
                type='text'
                placeholder='Стоимость'
                onChange={handleChange}
                value={newPizza.price}
            >
            </input>
            <input
                name="img"
                type='text'
                placeholder='Изображение'
                onChange={handleChange}
                value={newPizza.img}
            >
            </input>
            <button
            type='submit'>
                + Добавить
            </button>
        </form>
    );
};

export default AddPizzaForm;