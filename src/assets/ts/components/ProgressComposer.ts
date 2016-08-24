import { connect } from 'react-redux';
import Progress from './Progress';
import store from "../store";

const mapStateToProps = (state) => {
  return {
    currentTime: state.player.playbackPosition,
    totalTime: 200
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ProgressComposer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress)

export default ProgressComposer;
