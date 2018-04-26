import React, { Component } from 'react'
import SearchBar from './SearchBar'
import PAOTable from './PAOTable'
import { Row, Col } from 'react-bootstrap'

class NumSystemTable extends Component {

	state = {
		filterText: ''
	}

	handleTextChange(filterText) {
		this.setState({
			filterText
		})
	}

    render() {
        return (
        	<Row>
        		<Col xs={12} md={4}>
        			<SearchBar
        				filterText={this.state.filterText}
        				onFilterTextChange={this.handleTextChange.bind(this)}
        			/>
        		</Col>
        		<Col xs={12}>
        			<PAOTable
        				numberSystem={this.props.numberSystem}
        				filterText={this.state.filterText}
        			/>
        		</Col>
        	</Row>
        )
    }
}

export default NumSystemTable