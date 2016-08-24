import { PLAYER_PLAY, PLAYER_STOP, PLAYER_PROGRESSED } from "../actions/player";
import { loadSound, pauseSound } from "../effects/player";

export default store => next => action => {

    switch (action.type) {

        case PLAYER_PLAY:
            loadSound(action.payload.trackId, () => {

            });
            return next(action);

        case PLAYER_STOP:
            pauseSound();
            return next(action);

        case PLAYER_PROGRESSED:
            //Nothing
            return next(action);

        // default should just be fall through
        default:
            return next(action);
    }
};
