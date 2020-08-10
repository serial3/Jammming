import React from 'react';

class Tracklist extends React.Component {
    render() {
    return (
        <div className="TrackList">
            {this.props.tracks.map(Track => <Track key={track.id} /> )}
        </div>
    )};
  }
  
  export default Tracklist;  
  