import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar/Searchbar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = [name, artist, album, id];
  }
  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar /> //ainda não está
      <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} /> //ainda não está
      <Playlist /> // ainda não está
      </div>
      </div>
    </div>
  )};
}

export default App;