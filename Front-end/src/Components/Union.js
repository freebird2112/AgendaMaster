import {Accordion, Navbar, Container, Row, Col, Form } from 'react-bootstrap';
import { deletehora } from '../store/services/services';
import {Title, Button} from './Styledcomponents' 
import image from '../images/img2.jpg';

function Union(props) {     

    return (
        <Container fluid style = {
            {
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }
        }>
        <div className='container-fluid' >
            <Navbar bg-white>
                <Title> {'Agenda Master - TEL 335'}</Title>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{color: 'white'}}>
                Signed in as: <a href="#login" style={{color: 'white'}}>
                You </a>
                        </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div >
            <Accordion def>
                <Accordion.Item >
                <section id= "Union">
                    {
                        props.services.map((store,index) =>            //mapeo para guardar 
                            <div key = {store.service + '_' + index}>  
                                <Accordion.Header>{store.serviceName}</Accordion.Header>
                                <Accordion.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Form.Select aria-label="Default select example">
                                                <option>Selecciona horario preferente</option>
                                                <option value="1">{store.horario1}</option>
                                                <option value="2">{store.horario2}</option>
                                            </Form.Select>
                                        </Col>
                                        <Col>
                                        <Form.Group className="mb-3" controlId="ema">
                                        <Form.Control type="name" placeholder="Nombre" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="name">
                                        <Form.Control type="email" placeholder="Email" />
                                        </Form.Group> 
                                        <Button variant="primary" type="submit" /*onClick={()=> (deletehora(value))}*/>
                                                Confirmar
                                        </Button>                        
                                         </Col>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </div>)
                    }
                    </section>
                </Accordion.Item>
                
            </Accordion>
        </div>             
    </div>
    </Container>
    )

}

export default Union;
