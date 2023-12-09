import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Figure from "react-bootstrap/Figure";

function ShapeExample() {
  return (
    <CardGroup>
      <Card border="black">
        <Figure>
          <Figure.Image src="\src\assets\img\hombre1.jpg"></Figure.Image>
        </Figure>
        <Card.Body>
          <Card.Title>Jaime Torres</Card.Title>
          <Card.Text>
            <p>Universidad Adolfo Ibañez</p>
            <p>Estudiante de Ingeniería Civil Informática</p>
            <p>Especialización : Maestro Pokemón</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="black">
        <Figure>
          <Figure.Image src="\src\assets\img\hombre2.jpg"></Figure.Image>
        </Figure>
        <Card.Body>
          <Card.Title>Agustín Abusleme</Card.Title>
          <Card.Text>
            <p>Universidad Adolfo Ibañez</p>
            <p>Estudiante de Ingeniería Civil Informática</p>
            <p>Especialización : Fútbol</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="black">
        <Figure>
          <Figure.Image src="\src\assets\img\mujer1.jpg"></Figure.Image>
        </Figure>
        <Card.Body>
          <Card.Title>Camila Retamales</Card.Title>
          <Card.Text>
            <p>Universidad Adolfo Ibañez</p>
            <p>Estudiante de Ingeniería Civil Informática</p>
            <p>Especialización : Animación Japonesa</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default ShapeExample;
