import { combineReducers } from "redux";
import player, { IPlayerState } from "./player";
import downloader, { IDownloaderState } from "./downloader";
import playlist, { PlaylistState } from "./playlist";
import tracks, { Track } from "./tracks";

export interface State {
    player: IPlayerState;
    downloader: IDownloaderState;
    playlist: PlaylistState;
    tracks: Track[];
};

export default combineReducers({
    player,
    downloader,
    playlist,
    tracks
});
