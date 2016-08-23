import * as React from 'react';

const Track = ({ onClick, track, currentlyPlayingTrack }) => (
  <li
    onClick={() => onClick(track.id)}
    style={{
      color : currentlyPlayingTrack==track.id ? 'red' : ''
    }}
  >
    {track.name}
  </li>
)

export default Track;
