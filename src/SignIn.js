import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import {
    Form,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Row,
    Col,
    Image
} from 'react-bootstrap'

class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        if (this.props.onSignIn)
            this.props.onSignIn(values)
    }

    render() {
        return (
            <div className='text-center flex-container'>
            <Link className='go-back-arrow' to='/'>Close</Link>
                <Form className='form-style' onSubmit={this.handleSubmit}>


                    <Image src="http://placeholder.pics/svg/200x180"  width="300px" alt="Avocado" rounded responsive/>
                    <h3>Sign In Please</h3>
                    <FormGroup controlId='formCreateUser'>
                        <FormControl
                            type='text'
                            name='email'
                            placeholder='Email'
                        />
                        <FormControl
                            type="text"
                            name="password"
                            placeholder='Password'
                        />
                    </FormGroup>

                    <Button className="signin-button" type="submit">Sign In</Button>

                </Form>
            </div>

        )
    }
}

export default SignIn