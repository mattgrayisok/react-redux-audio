import store from "../store";
import { progressed, trackEnded } from '../actions/player';

let currentAudio: HTMLAudioElement = null;

// init function - this will be called in the sound middleware
export const loadSound = (trackId: number, done: () => void): void  => {

  let selectedTrack = (<any>store.getState()).tracks.filter(x => x.id == trackId);

  if(selectedTrack.length == 0){
    return;
  }

  if(currentAudio !== null){
    //Stop current audio
    currentAudio.pause();
  }

  currentAudio = new Audio(`/${trackId}.mp3`);

  //Add a listener which listens for the first track progress event and puts us into a playing state
  currentAudio.addEventListener('timeupdate', (time) => {
    if(currentAudio.currentTime > 0){
      store.dispatch(progressed(currentAudio.currentTime));
    }
  });

  currentAudio.addEventListener('ended', () => {
    store.dispatch(trackEnded());
  });

  currentAudio.play();

};

export const pauseSound = () => {

  if(currentAudio !== null){
    //Stop current audio
    currentAudio.pause();
  }

}
