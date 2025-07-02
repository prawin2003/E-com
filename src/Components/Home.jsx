import Card from 'react-bootstrap/Card';
import { useSelector , useDispatch} from 'react-redux';
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import axios from 'axios';
import { removeProduct } from '../Store/productSlice';
import { addItemToCart } from '../Store/cartSlice';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
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

  return (
    <>
    <h2 className='category-title'>ALL Products</h2>
    <div className='card-container '>
      {products.map((product) => (
        <Card key={product.id}  >
          <Card.Header>
          <Card.Img src={product.image} />
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
      ))}
      </div>
    </>
  );
}

export default Home;