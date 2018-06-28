import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Bookmark from './components/Bookmark'

class App extends Component {
  state = {
    bookmarks: []
  }
  render() {
    const { bookmarks } = this.state
    return (
      <div className="App">
        <h1>Bookmarks</h1>
        <ul>
        {
          bookmarks.map(
            bookmark => <Bookmark key={bookmark._id} title={bookmark.title} url={bookmark.url} />
          )
        }
        </ul>
      </div>
    );
  }

  async componentDidMount() {
    try {
      const bookmarks = await axios.get(
        'http://localhost:3000/bookmarks'
      )
      this.setState({ bookmarks: bookmarks.data })
    }
    catch(error) {
      alert('Can\'t get bookmarks!')
    }
  }
}


export default App;
