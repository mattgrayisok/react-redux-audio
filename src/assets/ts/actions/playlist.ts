import store from "../store";

export const PLAYLIST_ADD = "audioplayer/playlist/ADD";
export const PLAYLIST_REMOVE = "audioplayer/playlist/REMOVE";
export const PLAYLIST_ADD_AT_POSITION = "audioplayer/playlist/ADD_AT_POSITION";
export const PLAYLIST_REMOVE_AT_POSITION = "audioplayer/playlist/REMOVE_AT_POSITION";

export const add = (trackId: number) => {
    return {
        type: PLAYLIST_ADD,
        payload: {
            trackId: trackId
        },
    };
};

export const addAtPosition = (trackId: number, position: number) => {
    return {
        type: PLAYLIST_ADD_AT_POSITION,
        payload: {
            trackId: trackId,
            position: position
        },
    };
};

export const remove = (trackId: number) => {
    return {
        type: PLAYLIST_REMOVE,
        payload: {
            trackId: trackId,
        },
    };
};

export const removeAtPosition = (position: number) => {
    return {
        type: PLAYLIST_REMOVE_AT_POSITION,
        payload: {
            position: position,
        },
    };
};
