import React from 'react';

export default function pexelLogo({ focused }) {
  return (
    <div className="pexel-logo-container">
      {focused ? (
        <div></div>
      ) : (
        <div>
          <a href="https://www.pexels.com">
            <img
              src="https://images.pexels.com/lib/api/pexels-white.png"
              width="60%"
              alt=""
            />
          </a>
        </div>
      )}
    </div>
  );
}
