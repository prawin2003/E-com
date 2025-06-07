import { useSelector,useDispatch} from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import Card from 'react-bootstrap/Card';  
import { removeItemFromCart ,initializer} from "../Store/cartSlice";
import { useEffect } from "react";


const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializer(JSON.parse(localStorage.getItem('cart'))));
  }, []);
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;
    dispatch(removeItemFromCart(id));
  };

  return (
    <>
    <h2>Cart Products</h2>
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
          </Card.Footer>
        </Card>
      ))}
      </div>
    </>
  )
}

export default Cart