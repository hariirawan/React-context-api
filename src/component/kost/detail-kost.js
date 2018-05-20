import React, { Component } from 'react';
import Context from '../../config/Context';
import {
   Card,
   CardImg,
   Col,
   ListGroup,
   ListGroupItem,
   ListGroupItemHeading,
   ListGroupItemText,
   Row
} from 'reactstrap';

class ListKost extends Component {
   render() {
      return (
         <Context.Consumer>
            {
               (data) => (
                  <div ref={(ref) => { this.data = data }}>
                     <div className="header-detail mb-3 mt-3" >
                        <h1 className="text-center">
                           {data.kostId.name}
                        </h1>
                     </div>
                     <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                           <Row>
                              <Col sm="6">
                                 <Card className="mb-3">
                                    <CardImg top width="100%" src={data.kostId.picture} alt="Card image cap" />
                                 </Card>
                                 <ListGroup>
                                    <ListGroupItem><h3>Location</h3></ListGroupItem>
                                    <ListGroupItem>{data.kostId.address}</ListGroupItem>
                                    <ListGroupItem>West NTB, Indonesia</ListGroupItem>
                                 </ListGroup>
                              </Col>
                              <Col sm="6" className="card-border-left">
                                 <ListGroup>
                                    <ListGroupItem active>
                                       <ListGroupItemHeading className="align-center">
                                          Detail Kost
                                       </ListGroupItemHeading>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                       <ListGroupItemHeading>Name</ListGroupItemHeading>
                                       <ListGroupItemText>
                                          {data.kostId.name}
                                       </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                       <ListGroupItemHeading>Description</ListGroupItemHeading>
                                       <ListGroupItemText>
                                          {data.kostId.desc}
                                       </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                       <ListGroupItemHeading>Adress</ListGroupItemHeading>
                                       <ListGroupItemText>
                                          {data.kostId.address}
                                       </ListGroupItemText>
                                    </ListGroupItem>
                                 </ListGroup>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  </div>
               )
            }
         </Context.Consumer>
      );
   }
}

export default ListKost;