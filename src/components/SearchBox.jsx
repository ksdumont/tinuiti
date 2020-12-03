import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBox({ getProducts }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e);
    getProducts(text);
  };
  console.log(text);
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
  getProducts: PropTypes.func,
};
SearchBox.defaultProps = {
  getProducts: () => {},
};

export default SearchBox;
