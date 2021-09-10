import './Calculator.css';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'






function Calculator(){

    return(
        

        
    <div>
         <br/>
       
        <div >
        <p className="header1">Select A Topic!</p>
            
        </div>

      
       <br/>
       



        <CardGroup >
  <Card className="cardg">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cardg"> 
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="cardg">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>


<br/>

<br/>

<br/>


    </div>
        
    )


}

export default Calculator;