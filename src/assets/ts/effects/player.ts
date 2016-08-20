import store from "../store";

let currentAudio: HTMLAudioElement = null;

// init function - this will be called in the sound middleware
export const loadSound = (trackId: number, done: () => void): void  => {

  let selectedTrack = (<any>store.getState()).tracks.filter(x => x.id == trackId);

  if(selectedTrack.length == 0){
    return;
  }

  currentAudio = new Audio(`/${trackId}.mp3`);
  currentAudio.play();

};
