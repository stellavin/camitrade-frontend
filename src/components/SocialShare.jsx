import React from 'react';
import ReactGA from 'react-ga';

// Initialize ReactGA with your Google Analytics tracking ID
ReactGA.initialize('G-PWXX0RHDML');

const SocialShare = () => {
  const handleSocialMediaClick = (platform) => {
    // Track the click event
    ReactGA.event({
      category: 'Social Media',
      action: `Clicked on ${platform} Icon`,
    });
  };

  return (
    <>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61550690340665&mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className="facebook"
            onClick={() => handleSocialMediaClick('Facebook')}
          >
            <i className="icofont-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/camitrade-investment-fiduciaries/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
            onClick={() => handleSocialMediaClick('LinkedIn')}
          >
            <i className="icofont-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/camitradeinvestmentfiduciaries?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
            className="instagram"
            onClick={() => handleSocialMediaClick('Instagram')}
          >
            <i className="icofont-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://x.com/CFiduciaries?t=-elCVwOn-_Ao8arO2oMGoA&s=08"
            target="_blank"
            rel="noreferrer"
            className="twitter"
            onClick={() => handleSocialMediaClick('Twitter')}
          >
            <i className="icofont-twitter"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialShare;
