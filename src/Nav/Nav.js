import './Nav.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';





function Nav(){

    return(
        

        
    <div>
    
        <Navbar className="Navbarcolor">
    <Container>
      


<Link className="btn1" to='/'>

<p > Home Page </p>
</Link>

<Link className="btn2" to='/About'>
<p > About Us </p>
</Link>

    </Container>
  </Navbar>

    </div>
        
    )


}

export default Nav;