import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const MyNavbar = () => {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/about-me"}>Aboutme</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
                        <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
                        <Nav.Link as={Link} to={"/add-product"}>Add Product</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <MdOutlineShoppingCartCheckout id='cart-icon' onClick={() => navigate("/cart")} />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;