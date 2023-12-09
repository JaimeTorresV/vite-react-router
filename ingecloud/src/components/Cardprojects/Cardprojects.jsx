import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Cardprojects() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
        <MDBCard border="black">
          <MDBCardImage
            src="\src\assets\img\camera.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Proyecto 1</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black">
          <MDBCardImage
            src="\src\assets\img\computer.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Proyecto 2</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black">
          <MDBCardImage
            src="\src\assets\img\server.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Proyecto 3</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard border="black">
          <MDBCardImage
            src="\src\assets\img\software.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Proyecto 4</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default Cardprojects;
