import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src="\src\assets\img\img1.jpg" className="w-100" alt="" />
          <Carousel.Caption>
            <h3>Mision</h3>
            <p>
              Proporcionar las tecnologías más innovadoras a medida de las
              necesidades empresariales, con el objetivo de incrementar su
              competitividad y productividad.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="\src\assets\img\img2.jpg" className="w-100" alt="" />
          <Carousel.Caption>
            <h3>Visión</h3>
            <p>
              Convertirnos en la compañía de tecnología más atractiva para los
              profesionales que quieran transformar la sociedad y las empresas y
              en el socio tecnológico para las compañías que requieren
              incorporar tecnología para mejorar y optimizar sus negocios.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="\src\assets\img\img3.jpg" className="w-100" alt="" />
          <Carousel.Caption>
            <h3>Objetivo</h3>
            <p>
              Lograr transformar el ambiente (natural y social), para adaptarlo
              mejor a las necesidades y deseos del ser humano.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
