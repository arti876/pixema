import style from './Search.module.scss';
import clsx from 'clsx';
import Filter from '../Filter/Filter';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';

export default function Search() {
  const location = useLocation();
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

  const filterSearchOff = location.pathname !== RoutePath.ROOT;

  return (
    <>
      <div className={style.searchContainer}>
        <input
          type='text'
          placeholder='Search'
          className={clsx(style.inputSearch, { [style.disabled]: filterSearchOff })}
          value={searchInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={filterSearchOff}
        />
        <Filter disabled={filterSearchOff} />
      </div>
    </>
  );
}
