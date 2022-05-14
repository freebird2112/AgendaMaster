import Header from './headers';
import { useState, useEffect } from 'react';
import {handlerAgenda} from './Controllers/agenda';
import './App.css';
import { Button } from './Components/Styledcomponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
import {Card} from 'react-bootstrap';



function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Horario 1
      </Button>
      <div style={{minHeight: '150px'}}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{width: '400px'}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Verifique su horario
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Confirmar
              </Button>
            </Form>
                
            </Card>
          </div>
        </Collapse>
      </div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Horario 2
      </Button>
      <div style={{minHeight: '150px'}}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{width: '400px'}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Verifique su horario
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Confirmar
              </Button>
            </Form>
                
            </Card>
          </div>
        </Collapse>
      </div>
    </>
    
  );
}


function App() {
  const handler = handlerAgenda();
  const [data, setData] = useState({});
  
  useEffect ( ()=>{
    handler.getAll().then(
      (res)=>{
        console.log(res.data)
        setData(res.data)
      }
    )
  }, [])


  return (
    <Container fluid>
      <Navbar bg-dark>
        <Container fluid>
          <Navbar.Brand href="#home">AgendaMaster</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">You</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Peluquería</Accordion.Header>
                <Accordion.Body>
                <ButtonGroup aria-label="Basic example">
                  <Example />
                    
                </ButtonGroup>
      
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Veterinario</Accordion.Header>
                <Accordion.Body>
                <ButtonGroup aria-label="Basic example">
                <Example />
  
                </ButtonGroup>
      
    
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Manicure</Accordion.Header>
                <Accordion.Body>
                <script>
                
                </script>
          
                  
                <ButtonGroup aria-label="Basic example">
                <Example />
  
                </ButtonGroup>
      
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          
        </Row>
      </Container>


      
    </Container>
    
  );
}



export default App;
