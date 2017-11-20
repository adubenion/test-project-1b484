import React from 'react'


class Watched extends React.Component {
	render() {
		const myWatchedList = this.props.list.map((listItems, key) => 
				<div key={key} className="listItem">
					<li name={listItems}>{listItems}</li>
					<button onClick={this.props.delete.bind(this, key, listItems)}>DELETE</button>
				</div>
			)
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