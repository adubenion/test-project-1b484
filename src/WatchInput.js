import React from 'react'
import firebase from 'firebase'

class Watch extends React.Component {
	render() {
		return(
			<div>
				<form onSubmit={this.props.addAnime}>
					<label>
					Add Anime:
						<input type="text" onChange={this.props.update} value={this.props.input} name="input" />
					</label>
					<input onClick={this.props.addAnime} type="button" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Watch;