import * as React from 'react';
import TrackComposer from './TrackComposer';

interface TracklistProps {
    tracks: any[];
    onTrackClick: (number) => void;
}

const Any_TrackComposer: any = TrackComposer;

const Tracklist = ({ tracks, onTrackClick }: TracklistProps) => (
  <ul>
    {tracks.map(track =>
      <Any_TrackComposer
        key={track.id}
        track={track}
        
      />
    )}
  </ul>
)

export default Tracklist;
