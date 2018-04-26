import React, { Component } from 'react'
import PAOCategoryRow from './PAOCategoryRow'
import PAORow from './PAORow'
import escapeRegExp from 'escape-string-regexp'
import { Row, Col, Table } from 'react-bootstrap'

class PAOTable extends Component {
    render() {
        const rows = []
        const filterText = this.props.filterText
        const match = new RegExp(escapeRegExp(filterText), 'i')

        for (let category in this.props.numberSystem) {
            rows.push(
                <PAOCategoryRow
					category={category}
					key={category}
				/>)
            for (let numb in this.props.numberSystem[category]) {
                if (
                    match.test(this.props.numberSystem[category][numb].initials) ||
                    match.test(this.props.numberSystem[category][numb].name) ||
                    match.test(this.props.numberSystem[category][numb].action) ||
                    match.test(this.props.numberSystem[category][numb].object) ||
                    match.test(this.props.numberSystem[category][numb].num)
                ) {
                	rows.push(
                		<PAORow
                			paorow={this.props.numberSystem[category][numb]}
                			key={numb}
						/>
                    );
                }

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