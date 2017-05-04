import * as React from 'react';
import { PlayerStates } from "../reducers/player";

const Track = ({ onClickPlay, onClickStop, track, currentlyPlayingTrack, playerState }) => (
  <li
    onClick={
      () => currentlyPlayingTrack == track.id && playerState == PlayerStates.Playing
      ? onClickStop() : onClickPlay(track.id)}
    style={{
      color : currentlyPlayingTrack==track.id ? 'red' : ''
    }}
  >
    {track.name}
  </li>
)

export default Track;
