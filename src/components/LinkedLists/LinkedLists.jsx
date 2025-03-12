import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LinkedLists.css';

function LinkedLists() {
  const [showVideo, setShowVideo] = useState(true);

  // This function will hide the video when it's finished or manually closed:
  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div className="linked-lists-container">
      <Link to="/" className="back-link">← Back</Link>
      
      {/* Video iframe */}
      {showVideo && (
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/zy4mh9BvkyA?autoplay=1&enablejsapi=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            onLoad={() => {
              const iframe = document.querySelector('iframe');
              const player = new window.YT.Player(iframe, {
                events: {
                  'onStateChange': (event) => {
                    if (event.data === window.YT.PlayerState.ENDED) {
                      setShowVideo(false); // Hide the video once it ends
                    }
                  },
                },
              });
            }}
          />
          <button className="close-video" onClick={handleClose}>Close Video</button>
        </div>
      )}
    </div>
  );
}

export default LinkedLists;
