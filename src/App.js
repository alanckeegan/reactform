import React, { Component } from 'react'
import logo from './logo.svg'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import './App.css'



class App extends Component {

state = {
  email: "",
  password: ""
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = () => {
  console.log(this.state)
}


  render() {
    return (
      <div className="App">
        <Form onSubmit>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={ e => this.handleChange(e)} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              onChange = { e => this.handleChange(e)} />
          </FormGroup>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App
