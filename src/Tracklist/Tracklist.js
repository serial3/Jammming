import React from 'react';

import { BaseComponent } from '../BaseComponent';
import Track from '../Track/Track';
import './Tracklist.css';

class TrackList extends BaseComponent {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => <Track key={track.id} track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} />)}
      </div>
    );
  }
}

export default TrackList;