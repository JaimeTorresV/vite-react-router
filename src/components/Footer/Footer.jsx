import { CDBBtn, CDBIcon, CDBBox, CDBModalFooter } from "cdbreact";

const Footer = () => {
  return (
    <CDBModalFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src="\src\assets\img\Logo.png" width="100px" />
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ms-2">&copy; Team Dinoco</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn
            flat
            color="dark"
            className="p-2"
            href="https://www.facebook.com/aingecloud"
            target="_blank"
          >
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="mx-3 p-2"
            href="https://twitter.com/ingecloud"
            target="_blank"
          >
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="p-2"
            href="https://www.instagram.com/ingecloud/"
            target="_blank"
          >
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="mx-3 p-2"
            href="https://www.linkedin.com/company/asesor%C3%ADas-ingecloud-ltda./about/"
            target="_blank"
          >
            <CDBIcon fab icon="linkedin" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            className="p-2"
            href="c.carneiro@ingecloud.cl"
            target="_blank"
          >
            <CDBIcon fab icon="google" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer;
