import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchWrapper from './styles';

const Search = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    // inputRef.current.className = inputRef.current.className !== 'open' && 'open';
  };

  return (
    <SearchWrapper>
      <span><FaSearch onClick={handleClick} /></span>
      <input ref={inputRef} type='text' />
    </SearchWrapper>
  )
}

export default Search;
