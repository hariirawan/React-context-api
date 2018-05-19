import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Context from '../../config/Context';
import ContextProvider from '../../provider/ContextProvider';
import Detail from './detail';
class KostDetail extends Component {
   render() {
      return (
         <Container>
            <ContextProvider>
               <Context.Consumer>
                  {
                     value => {
                        const { name, postId } = value;
                        return <Detail name={name} />
                     }
                  }
               </Context.Consumer>
            </ContextProvider>
         </Container>
      );
   }
}

export default KostDetail;