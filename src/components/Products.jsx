import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './Module.css'

function Cartao() {
    let settings ={
        do: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
     return(
         <>
            <h2><strong>EM DESTAQUE</strong></h2>
             <Slider {...settings}>
             <div class="box" >
             <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/transferir.jpeg" />
        <Card.Body>
          <Card.Title>Iphone 12 Azul</Card.Title>
          <Card.Text>
           Novo na caixa, Sujeito a negociações/trocas.
          </Card.Text>
          780.000,00
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
        </div>

        <div class="box" >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/transferir2.jpeg" />
        <Card.Body>
          <Card.Title>SAMSUNG A12 Preto</Card.Title>
          <Card.Text>
           Telemóvel usado por menos de 2 semanas, está tudo ok.
          </Card.Text>
          124.999,00
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      </div>


      <div class="box" >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/images.jpeg" />
        <Card.Body>
          <Card.Title>NOKIA S20</Card.Title>
          <Card.Text>
           Novinho em folha, tudo em bom estado. 
          </Card.Text>
          97.499,99
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      </div>


      <div class="box" >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/transferir.jpeg" />
        <Card.Body>
          <Card.Title>Iphone 12 Azul</Card.Title>
          <Card.Text>
           Novo na caixa, Preço fixo, não há discussão.
          </Card.Text>
          780.000,00
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      </div>
            </Slider>
            </>  
        
     )
 }
 export default Cartao;