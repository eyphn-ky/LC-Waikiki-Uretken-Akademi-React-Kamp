import React, { Component } from 'react'
import axios from 'axios';
import {Container,Spinner} from 'reactstrap';
import './Users.css';


export default class Users extends Component {
  state = {
    persons: [],
    isLoading : false,
  }
  
  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(user => {
        const persons = user.data;
        this.setState({ persons });
        this.setState({isLoading:true});
      })
  }
  render() {
    
    return (
      <div>
        <Container>
        {
          this.state.isLoading ?
          this.state.persons
            .map(person =>
             <div className='person-alert' style={{'cursor':'pointer'}} key={person.id}>{person.username}:{person.name}</div>
            )
            : <div><Spinner></Spinner></div>
        }
        </Container>
        </div>
    )
  }
}
