
import Carousel from 'react-bootstrap/Carousel'
const Slide = () => {
    return(
        <>

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="img/Novo Projeto.png"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="img/template2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/IMG_20200425_171723_286.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </>
    )
}
export default Slide;