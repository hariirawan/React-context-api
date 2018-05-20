import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Carausel from './component/carausel';
import Navbar from './component/navbar/Navbar';
import Kost from './component/kost';
import './index.css';

class App extends Component {

   render() {
      return (
         <div className="App">
            <Navbar />
            <Carausel />
            <Route path="/:id?" component={Kost} />
         </div >
      );
   }
}

export default withRouter(App);
