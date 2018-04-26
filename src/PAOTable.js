import React, { Component } from 'react'
import PAOCategoryRow from './PAOCategoryRow'
import PAORow from './PAORow'
import { Row, Col, Table } from 'react-bootstrap'

class PAOTable extends Component {
	render() {
		const rows = []
		for(let category in this.props.numberSystem) {
			rows.push(
				<PAOCategoryRow
					category={category}
					key={category}
				/>)
			for(let num in this.props.numberSystem[category] ) {
				rows.push(
					<PAORow
						paorow={this.props.numberSystem[category][num]}
						key={num}
					/>
				);
			}

		}

		return (
			<Row>
				<Col xs={12}>
				<Table bordered condensed hover>
					<thead>
						<tr>
							<td>Number</td>
							<td>Initials</td>
							<td>Person</td>
							<td>Action</td>
							<td>Object</td>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</Table>
				</Col>
			</Row>
		)
	}
}

export default PAOTable