import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../assets/img/carousel1.png"
import carousel2 from "../../assets/img/carousel2.png"
import carousel3 from "../../assets/img/carousel3.png"
import carousel4 from "../../assets/img/carousel4.png"


function Slider() {

  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {carousel1}
          alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <style>
        {`
          @media (max-width: 767px) {
            .carousel {
              display: none;
            }
          }
        `}
      </style>
    </>
    
  );
}

export default Slider;