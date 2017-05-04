import { connect } from 'react-redux';
import Track from './Track';
import store from "../store";
import { play, stop } from "../actions/player";
import { PlayerStates } from "../reducers/player";

const mapStateToProps = (state) => {
  return {
    currentlyPlayingTrack: state.player.trackId,
    playerState: state.player.state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPlay: (id) => {
      dispatch(play(id))
    },
    onClickStop: () => {
      dispatch(stop())
    }
  }
}

const TrackComposer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Track)

export default TrackComposer;
