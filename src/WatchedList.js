import React from 'react'
import firebase from 'firebase'


class Watched extends React.Component {
	render() {
	const myWatchedList = this.props.list.map(listItems => [<li name={listItems}>{listItems}</li>, <button onClick={this.props.delete}>DELETE</button>])
		return(
			<div>
				<h3>List of Animes Already Watched</h3>
				<ul>
					{myWatchedList}
				</ul>
			</div>
		);
	}
}

export default Watched;