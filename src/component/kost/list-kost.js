import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Context from '../../config/Context';
import {
   Button,
   Card,
   CardImg,
   CardBody,
   CardTitle,
   CardSubtitle,
   CardText,
   Col,
   Row
} from 'reactstrap'
class ListKost extends Component {
   render() {
      return (

         <Row>
            <Context.Consumer>
               {
                  data => data.kost.length > 0 ?
                     data.kost.map(({ _id, name, desc, picture, address, request }, key) => {
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
                                    <Link to={`/${_id}`}>
                                       <Button color="primary">Detail</Button>
                                    </Link>
                                 </CardBody>
                              </Card>
                           </Col>
                        )
                     }) : "Loading"
               }
            </Context.Consumer>
         </Row>
      );
   }
}

export default withRouter(ListKost);