import style from './Search.module.scss';
import Filter from '../Filter/Filter';
import { useState } from 'react';

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>('');

  function handleChange(e: { target: { value: string } }) {
    const value = e.target.value;
    setSearchInput(value);
  }

  function handleKeyDown(e: { key: string }) {
    const keyDown = e.key === 'Enter';
    if (keyDown) {
      console.log(searchInput);
      setSearchInput('');
    }
  }

  return (
    <>
      <div className={style.form}>
        <input
          type='text'
          placeholder='Search'
          className={style.inputSearch}
          value={searchInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Filter />
      </div>
    </>
  );
}
