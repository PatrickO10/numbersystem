import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

class SearchBar extends Component {

	updateTextChange(e) {
		let textValue = e.target.value;

		this.props.onFilterTextChange(textValue);
	}

	render() {
		const filterText = this.props.filterText;

		return (
			<Form inline>
				<FormGroup controlId="formSearch">
					<ControlLabel>Search</ControlLabel>{' '}
					<FormControl
						type="text"
						placeholder="Search..."
						value={filterText}
						onChange={(evt) => {this.updateTextChange(evt)}}
					/>
				</FormGroup>
  				<Button type="submit">Send</Button>
			</Form>
		)
	}
}

export default SearchBar