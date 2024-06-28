import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { carts } = useSelector((state) => state.allCart)
    console.log(carts)
    return (
            <Navbar style={{ height: "60px", background: "black", color: "white" }} >
                <Container>
                    <NavLink to='/'>
                        <h3 className='text-light'>E-Commerce</h3>
                    </NavLink>
                    <NavLink to='/cart' className="text-decoration-none text-light mx-2">
                        <div id='ex4'>
                            <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                        </div>
                    </NavLink>
                </Container>
            </Navbar>
    )
}

export default Header 