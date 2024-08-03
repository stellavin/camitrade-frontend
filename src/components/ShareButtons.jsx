import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const ShareButtons = () => {
  const shareUrl = window.location.href;

  return (
    <div className="share-buttons">
      <FacebookShareButton url={shareUrl}>
        <button>Share on Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <button>Share on Twitter</button>
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl}>
        <button>Share on LinkedIn</button>
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;
