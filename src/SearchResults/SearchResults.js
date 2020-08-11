import React from 'react';

import { BaseComponent } from '../BaseComponent';
import TrackList from '../Tracklist/Tracklist';
import './SearchResults.css';

class SearchResults extends BaseComponent {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} />
      </div>
    );
  }
}

export default SearchResults;