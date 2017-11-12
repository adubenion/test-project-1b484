import React from 'react'
import firebase from 'firebase'

class Watch extends React.Component {
	render() {
		return(
			<div>
				<form>
					<label>
					Add Anime:
						<input type="text" value={this.props.input} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Watch;