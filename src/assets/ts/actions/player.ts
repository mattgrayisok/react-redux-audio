import store from "../store";

export const PLAYER_PLAY = "audioplayer/player/PLAY";
export const PLAYER_STOP = "audioplayer/player/STOP";

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
