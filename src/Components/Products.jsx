import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { removeProduct } from '../Store/productSlice';
import { addItemToCart } from '../Store/cartSlice';
import { FiEdit } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";



const Products = () => {
    const products = useSelector((state) => state.products);
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;
        axios.delete(`http://localhost:8080/products/${id}`)
            .then(() => {
                dispatch(removeProduct(id));
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            });
    };

    const handleEdit = (product) => {
        navigate(`/update-product`, { state: { product } });
    };

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };

    useEffect(() => {
        const uniqueCategories = products.map((product) => product.category).filter((value, index, self) => self.indexOf(value) === index);
        setCategory(() => uniqueCategories);
    }, [products]);




    return (
        <>
            {category.map((cat) => (
                <div key={cat}>
                    <h3 className='category-title'>{cat.toUpperCase()}</h3>
                    <div className='card-container' key={cat}>
                        {products.filter((product) => product.category === cat).map((product) => {
                            return (

                                <Card key={product.id} >
                                    <Card.Header >
                                        <Card.Img variant="top" src={product.image} />
                                    </Card.Header>
                                    <Card.Body >
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>Rating : {product.rating.rate} ({product.rating.count})</Card.Text>
                                        <Card.Text>₹{product.price}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer >
                                        <IoTrashOutline onClick={() => handleDelete(product.id)} />
                                        <FiEdit onClick={() => handleEdit(product)} />
                                        <MdOutlineAddShoppingCart onClick={() => handleAddToCart(product)} />
                                    </Card.Footer>
                                </Card>

                            )
                        })}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Products