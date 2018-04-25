import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

class SearchBar extends Component {
	render() {
		return (
			<Form inline>
				<FormGroup controlId="formSearch">
					<ControlLabel>Search</ControlLabel>{' '}
					<FormControl type="text" placeholder="Search..." />
				</FormGroup>
  				<Button type="submit">Send</Button>
			</Form>
		)
	}
}

export default SearchBar