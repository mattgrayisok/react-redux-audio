//import { TIME_SET_DOW, TIME_SET_TOD } from "../actions/time";

interface IDownloadState {
    trackId: number;
    downloaded: number;
    totalSize: number;
}

export interface IDownloaderState {
    active: boolean;
    downloadRate: number;
    currentState: IDownloadState;
}

const defaultState: IDownloaderState = {
    active: false,
    downloadRate: 0,
    currentState: {
      trackId: 0,
      downloaded: 0,
      totalSize: 0
    }
};

export default (state = defaultState, action: { type: string; payload: string; }) => {

    switch(action.type) {

        /*case TIME_SET_DOW:
            return {
                dayOfWeek: action.payload,
                timeOfDay: state.timeOfDay,
            };

        case TIME_SET_TOD:
            return {
                dayOfWeek: state.dayOfWeek,
                timeOfDay: action.payload,
            };*/

        default:
            return state;
    }
};
