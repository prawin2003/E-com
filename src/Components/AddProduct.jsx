import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Store/productSlice';

const AddProduct = () => {
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const productData = {
            title: data.title,
            price: parseFloat(data.price),
            description: data.description,
            category: data.category,
            image: data.image,
            rating: {
                rate: 1.5,
                count: 0
            }
        };
        axios.post('http://localhost:8080/products', productData)
            .then(response => {
                dispatch(addProduct(response.data));
                navigate(-1);
            })
            .catch(error => {
                console.error("Error adding product:", error);
                alert("Failed to add product. Please try again.");
            });
    };
    return (
        <div className='add-product-form '>
            <h5>Add Product</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' {...register("title", { required: "Title is required" })} />
                <label htmlFor='price'>Price</label>
                <input type='number' name='price' {...register("price", { required: "Price is required" })} />
                <label htmlFor='description'>Description</label>
                <textarea name='description' {...register("description", { required: false })} />
                <label htmlFor='category'>Category</label>
                <select name="category" {...register("category", { required: "Category is required" })}>
                    <option value="">Select Category</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
                <label htmlFor='image'>Image URL</label>
                <input type='url' name='image' {...register("image", { required: "Image URL is required" })} />
                <div className='button-container'>
                    <button type='reset' className=' btn btn-danger' onClick={() => navigate(-1)}>Cancel</button>
                    <button type="submit" className='btn btn-primary'>Add Product</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct