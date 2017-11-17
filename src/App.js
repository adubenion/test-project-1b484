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
    this.watched = this.watched.bind(this);
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
        add: ''
      })
    })
  }

  updateState(e) {
    this.setState({add: e.target.value})
  }

  watched(a, b) {
    console.log(a, b);

    {/*get initial To Watch List*/}
    var watchList = this.state.toWatch.slice();
    console.log(watchList);

    {/*get initial Watched List*/}
    var watchedList = this.state.watched.slice();
    console.log(watchedList);

    {/*get modified To Watch List*/}
    watchList.splice(b, 1);
    console.log(watchList);

    {/*get modified Watched List*/}
    var newWatched = watchedList.concat(a);
    console.log(newWatched);

    return this.setState({
      toWatch: watchList,
      watched: newWatched

    })
  }


  addAnime(i) {
    {/*Prevent page from defaulting to refresh*/}
    i.preventDefault();
    var list = this.state.toWatch;
    var newList = list.concat(this.state.add)
    console.log(newList)
    
    return this.setState({
      toWatch: newList,
      add: ''
         })
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
          <WatchList watched={this.watched} list={this.state.toWatch} delete={this.deleteWatch} />
        <h2>Watched</h2>
          <Watched list={this.state.watched} delete={this.deleteWatched} />
      </div>
    );
  }
}



export default App