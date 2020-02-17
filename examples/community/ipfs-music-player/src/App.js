import React from 'react';
import Background from './Background'
import AlbumArt from './AlbumArt'
import './style.css';
import albumCover from "./media/vultures.png";
import Vultures from './media/Vultures.mp3';
import AudioPlayer from './AudioPlayer'
import { FaCode } from 'react-icons/fa'

function App() {
  let media = {
      title: 'Vultures',
      artist: 'Pervsydell',
      sources: {
        m4a: Vultures,
      },
      free: true,
    };

  return (
    <div className="App">
      <header>
          <h1 className="my-auto">IPFS Music Player</h1>
          <a href="https://www.caseyjkey.com/" className="my-auto"><FaCode /> <span>by Casey Key</span></a>
      </header>
      <Background />
      <AlbumArt image={albumCover} />
      <AudioPlayer media={media}/>
    </div>
  );
}

export default App;
