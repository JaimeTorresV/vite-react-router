import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardHeader,
} from "mdb-react-ui-kit";

function Servicesinfo() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 g-4">
      <MDBCol>
        <MDBCard border="black" background="white" shadow="0" className="mb-3">
          <MDBCardHeader background="transparent" border="black">
            Desarrollo
          </MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle>Servicio 1</MDBCardTitle>
            <MDBCardText>
              Desarrollamos y mantenemos el áreal de plataforma y servers
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black" background="white" shadow="0" className="mb-3">
          <MDBCardHeader background="transparent" border="black">
            Instalación
          </MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle>Servicio 2</MDBCardTitle>
            <MDBCardText>
              Instalación y actualizaciones de software. Además, configuraciones
              de Apps, respaldos de base de datos, recover
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black" background="white" shadow="0" className="mb-3">
          <MDBCardHeader background="transparent" border="black">
            Software
          </MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle>Servicio 3</MDBCardTitle>
            <MDBCardText>
              Desarrollo de software. Además, en la actualidad realizamos
              software a medida
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black" background="white" shadow="0" className="mb-3">
          <MDBCardHeader background="transparent" border="black">
            Redes
          </MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle>Servicio 4</MDBCardTitle>
            <MDBCardText>
              Diseño e instalación de redes computacionales, cableado y
              wireless, configuración de routers, política de usuarios, bases de
              datos.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black" background="white" shadow="0" className="mb-3">
          <MDBCardHeader background="transparent" border="black">
            Seguridad
          </MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle>Servicio 5</MDBCardTitle>
            <MDBCardText>
              Cámaras de seguridad, instalación y configuración de cámaras IP de
              seguridad, accesible desde Internet.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black" background="white" shadow="0" className="mb-3">
          <MDBCardHeader background="transparent" border="black">
            Mantención
          </MDBCardHeader>
          <MDBCardBody className="text-dark">
            <MDBCardTitle>Servicio 6</MDBCardTitle>
            <MDBCardText>
              Mantenciones preventivas y correctivas, ofrecemos planes de
              mantención de equipos computacionales, redes, respaldos e
              impresoras.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default Servicesinfo;
