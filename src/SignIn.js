import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class SignIn extends Component {
	handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        if (this.props.onSignIn)
            this.props.onSignIn(values)
    }

	render() {
		return (
			<div>
        		<Link className='close-sign-in' to='/'>Close</Link>
        		<Form inline onSubmit={this.handleSubmit}>
        			<FormGroup controlId='formCreateUser'>
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
        			<Button type="submit">Sign In</Button>
        		</Form>
      		</div>
		)
	}
}

export default SignIn