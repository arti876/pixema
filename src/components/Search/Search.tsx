import style from './Search.module.scss';
import clsx from 'clsx';
import Filter from '../Filter/Filter';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import { useAppDispatch } from '../../store/store';
import { addFilterData } from '../../store/Slice/filmsSlice';
import { fetchFilterFilms } from '../../store/Thunk/fetchFilterFilms';

export default function Search() {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState<string>('');

  function handleChange(e: { target: { value: string } }) {
    const value = e.target.value;
    setSearchInput(value);
  }
  const dispatch = useAppDispatch();

  function handleKeyDown(e: { key: string }) {
    const keyDown = e.key === 'Enter';
    if (keyDown) {
      const paramsThunk = {
        countries: '',
        genres: '',
        order: 'RATING',
        ratingFrom: '',
        ratingTo: '',
        yearFrom: '',
        yearTo: '2024',
        keyword: searchInput,
        page: 1,
      };
      console.log(searchInput);

      dispatch(addFilterData(paramsThunk));
      dispatch(fetchFilterFilms(paramsThunk));
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
