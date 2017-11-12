import React, { Component } from 'react';
import firebase from "firebase"
import fire from './fire';
import Watch from './WatchInput'
import WatchList from './WatchList'
import Watched from './WatchedList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toWatch: [],
      watched: [],
      add: []
    }
    this.addAnime = this.addAnime.bind(this);
    this.deleteWatch = this.deleteWatch.bind(this);
    this.deleteWatched = this.deleteWatched.bind(this);
    this.updateState= this.updateState.bind(this);
  }


  componentDidMount() {
    return fetch('https://test-project-1b484.firebaseio.com/.json')
    .then(result => {
      return result.json()
    })
    .then(resultJson => {
      console.log(resultJson.toWatch.anime.length)
      this.setState({
        toWatch: resultJson.toWatch.anime,
        watched: resultJson.watched.anime,
        add: 'Enter Anime Name...'
      })
    })
  }

  updateState(e) {
    this.setState({add: e.target.value})
  }


  addAnime(i) {
    i.preventDefault();
    var list = this.state.toWatch;
    var newList = list.concat(this.state.add)
    this.setState({toWatch: newList})
    console.log(newList)
  }

  deleteWatch(i) {
      var unWatch = this.state.toWatch.slice();
      unWatch.splice(i, 1);
      this.setState({toWatch: unWatch});
   }

   deleteWatched(i) {
      var unWatched = this.state.watched.slice();
      unWatched.splice(i, 1);
      this.setState({watched: unWatched});
   }

  render() {
    return(
      <div>
        <h1>Anime Watch List</h1>
        <h2>To Watch</h2>
          <Watch addAnime={this.addAnime} update={this.updateState} input={this.state.add} submit={this.addAnime}/>
          <WatchList list={this.state.toWatch} delete={this.deleteWatch} />
        <h2>Watched</h2>
          <Watched list={this.state.watched} delete={this.deleteWatched} />
      </div>
    );
  }
}



export default App