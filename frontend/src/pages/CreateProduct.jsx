import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const CreateProduct = () => {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const submitHandler = async ({ title, description, price, imgUrl }) => {
        const res = await axios.post("http://localhost:3000/products", {
            title,
            description,
            price,
            imgUrl
        });

        if (res.status === 201) {
            alert('product created successfully');
        }
    };

  return (
    <form onSubmit = {handleSubmit(submitHandler)} >
        <div>
            <label htmlFor='title'>Title</label>
            <input
             type="text" 
             id="title"
             className="border"
             {...register("title", {required: "Please Enter Product Title"
            })}
             />
             {errors.title &&  (
                <div className="text-red-700">{errors.title.message}</div>
             )}
        </div>

        <div>
            <label htmlFor='description'>description</label>
            <input
             type="text" 
             id="description"
             className="border"
             {...register("description", {required: "Please Enter Product description"
            })}
             />
             {errors.description &&  (
                <div className="text-red-700">{errors.description.message}</div>
             )}
        </div>

        <div>
            <label htmlFor='price'>price</label>
            <input
             type="text" 
             id="price"
             className="border"
             {...register("price", {required: "Please Enter Product price"
            })}
             />
             {errors.price &&  (
                <div className="text-red-700">{errors.price.message}</div>
             )}
        </div>

        <div>
            <label htmlFor='imgUrl'>imgUrl</label>
            <input
             type="text" 
             id="imgUrl"
             className="border"
             {...register("imgUrl", {required: "Please Enter Product imgUrl"
            })}
             />
             {errors.imgUrl &&  (
                <div className="text-red-700">{errors.imgUrl.message}</div>
             )}
        </div>
        

        <button type = "submit" onClick={handleSubmit} className="bg-black text-white rounded p-2">
            Create Product
        </button>
    </form>
  )
}

export default CreateProduct;