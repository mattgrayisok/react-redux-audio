import { connect } from 'react-redux';
import Tracklist from './Tracklist';
import store from "../store";
import { play, stop } from "../actions/player";

const getVisibleTracks = (tracks, filter) => {
  switch (filter) {
    case 'NO_FILTER':
      return tracks;
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: getVisibleTracks(state.tracks, "NO_FILTER")
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const TracklistComposer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracklist)

export default TracklistComposer;
