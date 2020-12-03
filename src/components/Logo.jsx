import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div>
      <Link to="/">
        <img className="tinuiti-logo" src="https://tinuiti.com/wp-content/uploads/2019/05/logo.svg" alt="Tinuiti" />
      </Link>
    </div>
  );
}

export default Logo;
