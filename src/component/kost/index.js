import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ListKost from './list-kost';
import DetailKost from './detail-kost';
import Context from '../../config/Context';

import {
   Container,
} from 'reactstrap';

class Kost extends Component {
   constructor(props) {
      super(props);
      this.state = {
         kost: [],
         kostId: []
      }
   }
   grabDataFromApi() {
      axios.get('http://localhost:8000/kost')
         .then(res => {
            this.setState({
               kost: res.data.payload
            })
         })
         .catch(err => {
            console.log(err);
         })
   }
   getDataId(id) {
      axios.get(`http://localhost:8000/kost/${id}`)
         .then(res => {
            this.setState({
               kostId: res.data.payload
            })
         })
         .catch(err => {
            console.log(err);
         })
   }

   UNSAFE_componentWillMount() {
      this.grabDataFromApi();
   }
   render() {
      const { match } = this.props
      return (
         <Container className="mb-4">
            <Context.Provider value={{
               kost: this.state.kost,
               kostId: this.state.kostId,
               getDataId: this.getDataId(match.params.id)
            }}>
               {
                  match.params.id !== undefined ? <DetailKost /> : <ListKost />
               }
            </Context.Provider>
         </Container>
      );
   }
}

export default withRouter(Kost);