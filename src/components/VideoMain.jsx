import React from 'react';

const VideoMain = () => {
  return (
    <div style={styles.videoArea}>
      <h2>Video Section</h2>
      <p>This is where your videos will appear.</p>
    </div>
  );
};

const styles = {
  videoArea: {
    backgroundColor: '#fafafa',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

export default VideoMain;
