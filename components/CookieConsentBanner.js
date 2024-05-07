// CookieConsentBanner.js

import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
       We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking "Accept",
          you consent to the use of ALL the cookies. Do not sell my personal
          information.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
