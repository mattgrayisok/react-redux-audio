import store from "../store";
import { trackExists } from "./tracks";
import { PLAYLIST_ADD_AT_POSITION, PLAYLIST_ADD, PLAYLIST_REMOVE, PLAYLIST_REMOVE_AT_POSITION } from "../actions/playlist";

export type PlaylistState = number[];

const defaultState: PlaylistState = [];

export default (state = defaultState, action: any) => {

    switch(action.type) {

        case PLAYLIST_ADD_AT_POSITION:

            if(!trackExists(action.payload.trackId)) return state;

            return [
              ...state.slice(0, action.payload.position),
              action.payload.trackId,
              ...state.slice(action.payload.position)
            ]

        case PLAYLIST_ADD:

            if(!trackExists(action.payload.trackId)) return state;

            return [...state, action.payload.trackId];

        case PLAYLIST_REMOVE:
            return state.filter(x => x != action.payload.trackId);

        case PLAYLIST_REMOVE_AT_POSITION:
            return [
              ...state.slice(0, action.payload.position),
              ...state.slice(action.payload.position+1)
            ]

        default:
            return state;
    }
};
