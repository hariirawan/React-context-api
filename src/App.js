import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './component/navbar/Navbar';
import Kost from './component/kost';
import KostDetail from './component/kost/KostDetail'
import './index.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Navbar />
            <Switch>
               <Route exact path="/" component={Kost} />
               <Route path="/kost/:id" component={KostDetail} />
            </Switch>
         </div >
      );
   }
}

export default withRouter(App);
