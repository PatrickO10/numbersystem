import React, { Component } from 'react'
import * as searchSVG from './icons/search.svg'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

class SearchBar extends Component {

    updateTextChange(e) {
        let textValue = e.target.value;
        if (this.props.onFilterTextChange)
            this.props.onFilterTextChange(textValue);
    }

    render() {
        const filterText = this.props.filterText;

        return (
            <Form inline>
				<FormGroup controlId="formSearch">
					<FormControl
						type="text"
						placeholder="Search..."
						value={filterText}
						onChange={(evt) => {this.updateTextChange(evt)}}
					/>
				</FormGroup>
  				<Button type="submit" active><img src={searchSVG} width="28px" alt="magnifying glass" /></Button>
			</Form>
        )
    }
}

export default SearchBar