import React from 'react'
import firebase from 'firebase'

class WatchList extends React.Component {
	render() {
		const myWatchList = this.props.list.map((listItems, key) => 
				<div key={key}>
					<li name={listItems}>{listItems}</li> 
					<button onClick={this.props.watched.bind(this, listItems, key)}>DONE</button>
					<button onClick={this.props.delete.bind(this, key)}>DELETE</button>
				</div>
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