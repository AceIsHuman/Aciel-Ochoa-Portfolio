import React from 'react';
import Link from '../../../components/reuseables/Link';

export default () => (
  <Link
    style={{
      backgroundColor: 'black',
      color: 'white',
      textDecoration: 'none',
      padding: '4px 6px',
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif",
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '1.2',
      display: 'inline-block',
      borderRadius: '3px',
    }}
    to="https://unsplash.com/@ikukevk?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
    title="Download free do whatever you want high-resolution photos from Kevin Ku"
    newTab
  >
    <span
      style={{
        display: 'inline-block',
        padding: '2px 3px',
      }}
    >
      <svg
        style={{
          height: '12px',
          width: 'auto',
          position: 'relative',
          verticalAlign: 'middle',
          top: '-2px',
          fill: 'white',
        }}
        viewBox="0 0 32 32"
      >
        <title>unsplash-logo</title>
        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
      </svg>
    </span>
    <span
      style={{
        display: 'inline-block',
        padding: '2px 3px',
      }}
    >
      Kevin Ku
    </span>
  </Link>
);
