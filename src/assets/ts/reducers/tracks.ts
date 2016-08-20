import store from "../store";
import { TRACKS_ADD, TRACKS_REMOVE } from "../actions/tracks";

export type Track = {
  name: string;
  length: number;
  id: number;
  image: string;
  artist: string;
}

const defaultState: Track[] = [];

export default (state = defaultState, action: any) => {

    switch(action.type) {

        case TRACKS_ADD:
            return [...state, action.payload.track];

        case TRACKS_REMOVE:
            return state.filter(x => x.id != action.payload.trackId);

        default:
            return state;
    }
};

export const trackExists = (trackId: number) => {
  return (<any>store.getState()).tracks.filter(x => x.id == trackId).length > 0;
}
