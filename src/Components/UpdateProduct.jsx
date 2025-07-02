import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../Store/productSlice';
import axios from 'axios';

const UpdateProduct = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const product = state?.product;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: product ? product.title : '',
      price: product ? product.price : '',
      description: product ? product.description : '',
      category: product ? product.category : '',
      image: product ? product.image : ''
    }
  });
   const onSubmit = (data) => {
    const updatedProduct = {
      ...data,
      rating:{
        rate: product ? product.rating.rate : 2.5,
        count: product ? product.rating.count : 0
      }
    };
    axios.put(`http://localhost:8080/products/${product.id}`, updatedProduct)
      .then(response => {
        dispatch(updateProduct(response.data));
        navigate(-1);
      })
      .catch(error => {
        console.error("Error updating product:", error);
      });
   };
    return (
     <div className='add-product-form '>
       <h5>Update Product</h5>
       <form onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor='title'>Title</label>
         <input type='text' name='title' {...register("title",{required:"Title is required"})}  />
         <label htmlFor='price'>Price</label>
         <input type='number' name='price' {...register("price",{required:"Price is required"})} />
         <label htmlFor='description'>Description</label>
         <textarea name='description' {...register("description",{required:false})}  />
         <label htmlFor='category'>Category</label>
         <select name="category" {...register("category",{required:"Category is required"})}>
           <option value="">Select Category</option>
           <option value="men's clothing">Men's Clothing</option>
           <option value="women's clothing">Women's Clothing</option>
           <option value="jewelery">Jewelery</option>
           <option value="electronics">Electronics</option>
         </select>
         <label htmlFor='image'>Image URL</label>
         <input type='url' name='image' {...register("image",{required:"Image URL is required"})} />
         <div className='button-container'>
         <button type='reset' className=' btn btn-danger' onClick={() => navigate(-1)}>Cancel</button>
         <button type="submit" className='btn btn-primary'>Save</button>
         </div>
       </form>
     </div>
   );
}

export default UpdateProduct