import React from 'react';
import Background from './Background'
import AlbumArt from './AlbumArt'
import './style.css';
import AudioPlayer from './AudioPlayer'
import { FaCode } from 'react-icons/fa'

// Here is an example of importing a song and its cover art
import albumCover from "./media/vultures.png";
import Vultures from './media/Vultures.mp3';

function App() {
  let media = {
      // Here you can change your song's title, the artist, and set sources
      title: 'Vultures',
      artist: 'Pervsydell',
      sources: {
        // Set source by importing the music file via relative path
        // Supported formats: mp3, m4a, oga, flac, wav, flv, and more!
        m4a: Vultures,
      },
      free: true,
    };

  return (
    <div className="App">
      <header>
          { /* Feel free to change IPFS Music Player to your own text */ }
          <h1 className="my-auto">IPFS Music Player</h1>
          { /* You may remove this attribution. Contact me for more features */ }
          { /* Additional paid features include: visualizer, tipping and revenue splitting via crypto*/ }
          <a href="https://www.caseyjkey.com/" className="my-auto"><FaCode /> <span>by Casey Key</span></a>
      </header>
      <Background />
      <AlbumArt image={albumCover} />
      <AudioPlayer media={media}/>
    </div>
  );
}

export default App;
