import React, { Component } from 'react'

class PAORow extends Component {
	render() {
		const paorow = this.props.paorow
		return (
			<tr>
				<td>{paorow.num}</td>
				<td>{paorow.initials}</td>
				<td>{paorow.name}</td>
				<td>{paorow.action}</td>
				<td>{paorow.object}</td>
			</tr>
		)
	}
}

export default PAORow