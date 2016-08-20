import store from "./store";
import { add, remove } from "./actions/tracks";
import {
  add as plAdd,
  remove as plRemove,
  addAtPosition as plAddAtPosition,
  removeAtPosition as plRemoveAtPosition
 } from "./actions/playlist";
import { Track } from "./reducers/tracks";
import { play, stop } from "./actions/player";

function main() {

  let newTrack1:Track = {
    name: "Track 1",
    length: 123,
    id: 1,
    image: "http://www.google.com/test.png",
    artist: "An Artist"
  }

  let newTrack2:Track = {
    name: "Track 2",
    length: 123,
    id: 2,
    image: "http://www.google.com/test.png",
    artist: "An Artist"
  }

  let newTrack3:Track = {
    name: "Track 3",
    length: 123,
    id: 3,
    image: "http://www.google.com/test.png",
    artist: "An Artist"
  }

  store.dispatch(add(newTrack1));
  store.dispatch(add(newTrack2));
  store.dispatch(add(newTrack3));

  //store.dispatch(remove(1));

  store.dispatch(plAdd(1));
  store.dispatch(plAdd(2));
  store.dispatch(plAdd(3));
  store.dispatch(plAddAtPosition(2, 0));
  store.dispatch(plRemoveAtPosition(1));

  store.dispatch(play(4))

}

main();
