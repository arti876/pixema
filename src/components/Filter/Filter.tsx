import { useEffect, useState } from 'react';
import style from './Filter.module.scss';
import { SvgFilter } from '../../svg/SvgFilter';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SvgClose } from '../../svg/svg';
import {
  FilterName,
  FilterData,
  FilterBtnName,
  FilterTitle,
  FilterPlaceholder,
  CountriesFilm,
  GenresFilm,
  FilterLocales,
  FilterRadio,
} from './Filter.type.';
import { useAppDispatch } from '../../store/store';
import Drawer from '@mui/material/Drawer';
import InputText from './Inputs/InputTextFilter/InputTextFilter';
import InputSelect from './Inputs/InputSelectFilter/InputSelectFilter';
import InputRadioFilter from './Inputs/InputRadioFilter/InputRadioFilter';
import { IFilmThunkParams, addFilterData } from '../../store/Slice/filmSlice';
import { fetchFilmFilter } from '../../store/Thunk/fetchFilmFilter';

interface FilterParams {
  disabled?: boolean;
}

export default function Filter({ disabled = false }: FilterParams) {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [icoFilterActive, setIcoFilterActive] = useState<boolean>(false);
  const { handleSubmit, reset, control } = useForm({
    mode: 'onBlur',
    defaultValues: FilterData,
  });
  const dispatch = useAppDispatch();

  const toggleDrawer = (open: boolean) => () => {
    setFilterOpen(open);
  };

  function clearFilter() {
    setIcoFilterActive(false);
    setFilterOpen(false);
    reset();
  }

  const onSubmit: SubmitHandler<IFilmThunkParams> = (data) => {
    dispatch(addFilterData(data));
    dispatch(fetchFilmFilter(data));
    setIcoFilterActive(true);
    if (FilterData) {
      setFilterOpen(false);
    }
  };

  useEffect(() => {
    if (disabled) {
      clearFilter();
    }
  }, [disabled]);

  return (
    <>
      <div className={`${style.icoContainer} ${icoFilterActive && style.icoContainerActive}`}>
        <div className={style.dot} />
        <button
          type='button'
          onClick={toggleDrawer(true)}
          disabled={disabled}
          className={disabled ? style.btnDisabled : ''}
        >
          <SvgFilter className={style.icoFilter} />
        </button>
      </div>
      <Drawer anchor={'right'} open={filterOpen} onClose={toggleDrawer(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${style.wrapperForm} ${filterOpen && style.filterActive}`}
        >
          <div className={style.formTitleContainer}>
            <div className={style.formTitle}>{FilterLocales.FILTER_TITLE}</div>
            <button type='button' onClick={toggleDrawer(false)}>
              <SvgClose className={style.icoClose} />
            </button>
          </div>
          <div className={style.inputWrapper}>
            <div className={style.sortContainer}>
              <div className={style.labelText}>{FilterTitle.SORT_BY}</div>
              <div className={style.inputRadioContainer}>
                <InputRadioFilter
                  control={control}
                  label={FilterTitle.RATING}
                  valueOption={FilterRadio.RATING}
                />
                <InputRadioFilter
                  control={control}
                  label={FilterTitle.YEARS}
                  valueOption={FilterRadio.YEAR}
                />
              </div>
            </div>

            <InputText
              control={control}
              name={FilterName.MOVIE_NAME}
              label={FilterTitle.MOVIE_NAME}
              placeholder={FilterPlaceholder.YOUR_TEXT}
            />
            <InputSelect
              control={control}
              name={FilterName.SELECT_GENRE}
              label={FilterTitle.GENRE}
              placeholder={FilterPlaceholder.SELECT_GENRE}
              optionData={GenresFilm}
            />
            <div className={style.twoСolumnsContainer}>
              <InputText
                type='number'
                control={control}
                name={FilterName.YEARS_FROM}
                label={FilterTitle.YEARS}
                placeholder={FilterPlaceholder.FROM}
              />
              <InputText
                type='number'
                control={control}
                name={FilterName.YEARS_TO}
                placeholder={FilterPlaceholder.TO}
              />
            </div>
            <div className={style.twoСolumnsContainer}>
              <InputText
                type='number'
                control={control}
                name={FilterName.RATING_FROM}
                label={FilterTitle.RATING}
                placeholder={FilterPlaceholder.FROM}
              />
              <InputText
                type='number'
                control={control}
                name={FilterName.RATING_TO}
                placeholder={FilterPlaceholder.TO}
              />
            </div>
            <InputSelect
              control={control}
              name={FilterName.SELECT_CONTRY}
              label={FilterTitle.CONTRY}
              placeholder={FilterPlaceholder.SELECT_CONTRY}
              optionData={CountriesFilm}
            />
          </div>
          <div className={style.twoСolumnsContainer}>
            <button type='button' className={style.btnClearFilter} onClick={clearFilter}>
              {FilterBtnName.CLEAR_FILTER}
            </button>
            <button type='submit' className={style.btnShowResults}>
              {FilterBtnName.SHOW_RESULTS}
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
