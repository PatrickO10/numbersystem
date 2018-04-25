import React, { Component } from 'react'
import SearchBar from './SearchBar'
import PAOTable from './PAOTable'
import { Row, Col } from 'react-bootstrap'

class NumSystemTable extends Component {
    render() {
        return (
        	<Row>
        		<Col xs={12} md={4}>
        			<SearchBar />
        		</Col>
        		<Col xs={12}>
        			<PAOTable />
        		</Col>
        	</Row>
        )
    }
}

export default NumSystemTable