import {Card} from 'react-bootstrap';


function Union(props) {     
    return (

        <section id= "Union" >
             <div>
    
                    <ul>
                        {
                           props.services.map((store,index) =>            //mapeo para guardar 
                                
                            <div key = {store.serviceName + '_' + index}>
                                
                                    <Card>
                                            <Card.Body>
                                            <Card.Title>{store.serviceName}</Card.Title>
                                            <Card.Text>{store.horario1}</Card.Text>
                                            <Card.Text>{store.horario2}</Card.Text>
                                            </Card.Body>
                                    </Card>
                                
                            
                            </div>
                            )
                        }
                    </ul>
                </div>

        </section>
    )

}

export default Union;