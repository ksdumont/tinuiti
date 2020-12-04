import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBox({ getQuery }) {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Products"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
}

SearchBox.propTypes = {
  getQuery: PropTypes.func,
};
SearchBox.defaultProps = {
  getQuery: () => {},
};

export default SearchBox;
