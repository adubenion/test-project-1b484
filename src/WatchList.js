import React from 'react'
import firebase from 'firebase'

class WatchList extends React.Component {
	render() {
		const myWatchList = this.props.list.map((listItems, key) => 
				[
					<li name={listItems}>{listItems}</li>, 
					<button>DONE</button>,
					<button onClick={this.props.delete}>DELETE</button>
				]
			)
		return(
			<div>
				<h3>List of Animes to Watch</h3>
				<ul>
					{myWatchList}
				</ul>
			</div>
		);
	}
}

export default WatchList;