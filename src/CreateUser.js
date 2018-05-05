import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


class CreateUser extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        if (this.props.onCreateUser)
            this.props.onCreateUser(values)
    }

    render() {
        return (
            <div className='flex-container'>
        <Link className='go-back-arrow' to='/'>Close</Link>

        <Form className='form-style' onSubmit={this.handleSubmit}>

          <FormGroup controlId='formCreateUser'>
            <ControlLabel>User Name</ControlLabel>
              <FormControl
                type='text'
                name='username'
                placeholder='User Name'
              />
            <ControlLabel>Email</ControlLabel>{' '}
              <FormControl
                type='text'
                name='email'
                placeholder='Email'
              />
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="text"
              name="password"
              placeholder='Password'
            />
          </FormGroup>
          <Button type="submit">Add User</Button>
      </Form>
      </div>
        )
    }
}

export default CreateUser