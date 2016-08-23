import { PLAYER_PLAY, PLAYER_STOP } from "../actions/player";
import { loadSound } from "../effects/player";

export default store => next => action => {

    switch (action.type) {

        case PLAYER_PLAY:
            loadSound(action.payload.trackId, () => {
                //next(action);
            });
            return next(action);;

        case PLAYER_STOP:
            //mute();
            return next(action);

        // default should just be fall through
        default:
            return next(action);
    }
};
