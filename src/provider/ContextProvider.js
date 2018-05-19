import React, { Component } from 'react';
import axios from 'axios';
import Context from '../config/Context';

class ContextProvider extends Component {
   constructor() {
      super();
      this.state = {
         posts: [],
         postId: []
      }
   }

   grabDataFromApi() {
      axios.get('http://localhost:8000/kost')
         .then(res => {
            this.setState({
               posts: res.data.payload
            })
         })
         .catch(err => {
            console.log(err);
         })
   }


   UNSAFE_componentWillMount() {
      this.grabDataFromApi()
   }
   render() {
      console.log(this.props)
      return (
         <Context.Provider
            value={{
               posts: this.state.posts,
               postId: this.state.postId,
               name: "hallow irawan"
            }}>
            {this.props.children}
         </Context.Provider>
      );
   }
}

export default ContextProvider;