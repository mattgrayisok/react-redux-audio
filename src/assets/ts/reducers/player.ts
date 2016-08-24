import { PLAYER_PLAY, PLAYER_STOP, PLAYER_PROGRESSED } from "../actions/player";

const enum PlayerStates {
    Stopped,
    Playing,
    Loading
}

export interface IPlayerState {
    state: PlayerStates;
    trackId: number;
    playbackPosition: number;
}

const defaultState: IPlayerState = {
    state: PlayerStates.Stopped,
    trackId: 0,
    playbackPosition: 0
};

export default (state = defaultState, action: { type: string; payload: any; }) : IPlayerState => {

    switch(action.type) {

        case PLAYER_PLAY:
            return {
                state: PlayerStates.Loading,
                trackId: action.payload.trackId,
                playbackPosition: 0
            };

        case PLAYER_STOP:
            return {
                state: PlayerStates.Stopped,
                trackId: state.trackId,
                playbackPosition: state.playbackPosition
            };

        case PLAYER_PROGRESSED:
            return {
                state: PlayerStates.Playing,
                trackId: state.trackId,
                playbackPosition: action.payload.time
            };

        default:
            return state;
    }
};
