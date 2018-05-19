import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Context from '../../config/Context';
import ContextProvider from '../../provider/ContextProvider';
import {
   Button,
   Card,
   CardImg,
   CardBody,
   CardTitle,
   CardSubtitle,
   CardText,
   Col,
   Container,
   Row,
} from 'reactstrap'
class Kost extends Component {
   render() {
      return (
         <Container>
            <Row>
               <ContextProvider>
                  <Context.Consumer>
                     {
                        data => data.posts.map(({ _id, name, desc, picture, address, request }, key) => {
                           return (
                              <Col sm="3" key={key}>
                                 <Card>
                                    <CardImg top width="100%" src={picture} className="image-container" />
                                    <CardBody>
                                       <CardTitle>{name}</CardTitle>
                                       <CardSubtitle>
                                          <small className="text-muted">{address}</small>
                                       </CardSubtitle>
                                       <CardText>{desc}</CardText>
                                       <Link to={`/kost/${_id}`}>
                                          <Button color="primary">Detail</Button>
                                       </Link>
                                    </CardBody>
                                 </Card>
                              </Col>
                           )
                        })
                     }
                  </Context.Consumer>
               </ContextProvider>
            </Row>
         </Container>
      );
   }
}

export default withRouter(Kost);