import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";


const Products = () => {
    const products = useSelector((state) => state.products);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        console.log(products);
        const uniqueCategories = products.map((product) => product.category)
            .filter((value, index, self) => self.indexOf(value) === index);
        setCategory(() => uniqueCategories);
    }, [products]);

    console.log(category);


    return (
        <>
            {category.map((cat) => (
                <div key={cat}>
                    <h3>{cat.toUpperCase()}</h3>
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
                                        <IoTrashOutline />
                                        <FiEdit />
                                        <MdOutlineAddShoppingCart />
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