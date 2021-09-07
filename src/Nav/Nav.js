import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';






function Nav(){

    return(
        

        
    <div>
        
        <Navbar className="Navbarcolor">
    <Container>
      

      
<Link to='AboutUs'>

<li>About Us</li>
</Link>



<Link to='/'>

<li>AHome Page</li>
</Link>


    </Container>
  </Navbar>



    </div>
        
    )


}

export default Nav;