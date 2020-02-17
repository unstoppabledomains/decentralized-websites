import React from 'react';
import JPlayer, {
  initializeOptions, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer';




export default function AudioPlayer(props) {
  let defaultOptions = {
    id: 'AudioPlayer',
    keyEnabled: true,
    verticalVolume: true,
    media: {
      title: '',
      artist: '',
      sources: {
      },
      free: true,
    },
  };

  if(props.media) {
    defaultOptions = { ...defaultOptions, ...props };
  }


  initializeOptions(defaultOptions);

  return (
    <JPlayer id={defaultOptions.id} className="jp-sleek">
      <Audio />
      <Gui>
        <div className="jp-controls jp-icon-controls">
          <Play><i className="fa">{/* Icon set in css */}</i></Play>
          <Repeat><i className="fa fa-repeat" /></Repeat>
          <div className="jp-progress">
            <SeekBar>
              <BufferBar />
              <PlayBar />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </div>
          <div className="jp-volume-container">
            <Mute>
              <i className="fa">{/* Icon set in css */}</i>
            </Mute>
            <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>
          </div>
          <Download><i className="fa fa-download" /></Download>
          <div className="jp-title-container">
            <Poster />
            <Title />
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  );
  }
