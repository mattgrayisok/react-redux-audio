# Audio Player

`docker-compose up -d` <-- Create containers and start them

-----------------

`localhost` <-- Direct to nginx

`localhost:3000` <-- Browsersync proxy

`localhost:3001` <-- Browsersync dashboard thing

---------------
{
  player: {
      state: (stopped|playing|loading),
      track: 1,
      playbackPosition: 12,

  },
  downloader: {
    active: true,
    downloadRate: 234,
    active: [
      {
        track: 1,
        downloaded: 1324,
        totalSize: 23452
      }
    ]
  },
  playlist: [
    1,2,3,4,5,6,7
  ],
  tracks: [
    {
      id: 1,
      name: "",
      image: "",
      artist: "",
      downloaded: false,
      trackLength: 123423
    }
  ]
}

#Todo

* Need a better way of running `npm install` and `typings install` in the build container
* Need to stop browserify from getting killed on random typescript errors

Actions:

Play (track | undefined) -> Streams unless downloaded
Stop
Download (trackId) -> adds track to download queue if not already downloaded
UnDownload (trackId) -> deletes track from db, removes from dl queue, sets dl flag to false
Skip (percentage)
NextTrack -> gets next id and fires play()
PrevTrack -> gets prev id and fires play()

Other actions:

TrackEnded
BlockDownloaded
DownloadProgress
TrackProgress
