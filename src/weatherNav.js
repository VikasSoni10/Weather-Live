import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function WeatherNav(props) {
  const [name, setName] = useState("");

  const getvalue = (e) => {
    setName(e.target.value);
  }

  const getFormData = (e) => {
    e.preventDefault();
    props.alert(name);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand ><h3>Weather Live</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form onSubmit={getFormData} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search City Name"
              value={name}
              onChange={getvalue}
              className="me-2"
              aria-label="Search"
            />
            <Button type="Submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WeatherNav;