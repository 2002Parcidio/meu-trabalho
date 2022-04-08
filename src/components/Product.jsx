import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './Module.css'
function Produtos ({img, nome, descrição, valor}) {

    return(
        
        <div>  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nome}</Card.Title>
          <Card.Text>
           {descrição}
          </Card.Text>
          {valor}
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>

   </div>

    )
}
export default Produtos;




