import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Home = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
    <h2>ALL Products</h2>
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
            <IoTrashOutline />
            <FiEdit />
            <MdOutlineAddShoppingCart />
          </Card.Footer>
        </Card>
      ))}
      </div>
    </>
  );
}

export default Home;