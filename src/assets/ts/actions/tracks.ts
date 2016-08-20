//import StoryState from "../interfaces/state/story";
import store from "../store";
import { Track } from "../reducers/tracks";
//import { dirtyLoadImages } from "./ui";
//import getImages from "../util/story/get-all-images";

export const TRACKS_ADD = "audioplayer/tracks/ADD";
export const TRACKS_REMOVE = "audioplayer/tracks/REMOVE";

export const add = (track: Track) => {
    return {
        type: TRACKS_ADD,
        payload: {
            track: track
        },
    };
};

export const remove = (trackId: number) => {
    return {
        type: TRACKS_REMOVE,
        payload: {
            trackId: trackId,
        },
    };
};
