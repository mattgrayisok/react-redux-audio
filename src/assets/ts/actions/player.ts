import store from "../store";

export const PLAYER_PLAY = "audioplayer/player/PLAY";
export const PLAYER_STOP = "audioplayer/player/STOP";
export const PLAYER_PROGRESSED = "audioplayer/player/PROGRESSED";
export const PLAYER_TRACK_ENDED = "audioplayer/player/TRACK_ENDED";

export const play = (trackId: number) => {
    return {
        type: PLAYER_PLAY,
        payload: {
            trackId: trackId
        },
    };
};

export const stop = () => {
    return {
        type: PLAYER_STOP
    };
};

export const progressed = (time: number) => {
    return {
        type: PLAYER_PROGRESSED,
        payload: {
            time: time
        },
    };
};

export const trackEnded = () => {
    return {
        type: PLAYER_TRACK_ENDED,
        
    };
};
