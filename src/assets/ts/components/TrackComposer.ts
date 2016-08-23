import { connect } from 'react-redux';
import Track from './Track';
import store from "../store";
import { play, stop } from "../actions/player";

const mapStateToProps = (state) => {
  return {
    currentlyPlayingTrack: state.player.trackId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      store.dispatch(play(id))
    }
  }
}

const TrackComposer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Track)

export default TrackComposer;
