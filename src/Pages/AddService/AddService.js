import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        console.log(data)

        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)






            })





    };






    return (
        <div className='w-50 mx-auto'>

            <h1>Add Service IN Mongo Dibba</h1>


            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='mb-2' required {...register("name")} />

                <textarea placeholder='Description' className='mb-2' {...register("description")} />

                <input placeholder='Image Link' className='mb-2' {...register("img",)} />

                <input placeholder='Price' className='mb-2' type="number" {...register("price")} />

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;