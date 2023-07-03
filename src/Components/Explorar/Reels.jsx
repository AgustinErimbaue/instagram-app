import React from 'react';
import reelsData from '../data/VideosReels';

const Reels = () => {
  return (
    <div>
      <h2>Reels</h2>
      {reelsData.map((reel) => (
        <div key={reel.id}>
          <h3>{reel.title}</h3>
          <a href={reel.url} target="_blank" rel="noopener noreferrer">
            Watch Reel
          </a>
        </div>
      ))}
    </div>
  );
};

export default Reels;
