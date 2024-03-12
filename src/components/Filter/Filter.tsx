import { useState } from 'react';
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
  IFilter,
  FilterLocales,
  FilterRadio,
} from './Filter.type.';
import { useAppDispatch } from '../../store/store';
import { recordFilterData } from '../../store/Slice/filterSlice';
import Drawer from '@mui/material/Drawer';
import InputText from './Inputs/InputTextFilter/InputTextFilter';
import InputSelect from './Inputs/InputSelectFilter/InputSelectFilter';
import InputRadioFilter from './Inputs/InputRadioFilter/InputRadioFilter';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import { fetchFilmFilterThunk } from '../../store/Thunk/fetchFilmFilterThunk';

export default function Filter() {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [icoFilterActive, setIcoFilterActive] = useState<boolean>(false);
  const { handleSubmit, reset, control } = useForm({
    mode: 'onBlur',
    defaultValues: FilterData,
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const toggleDrawer = (open: boolean) => () => {
    setFilterOpen(open);
  };

  function clearFilter() {
    setIcoFilterActive(false);
    setFilterOpen(false);
    dispatch(recordFilterData(FilterData));
    reset();
    navigate(-1, { replace: true });
  }

  const onSubmit: SubmitHandler<IFilter> = (data) => {
    // Данные для фильтрации
    const filters = {
      type: 'FILM',
      // countries: data.selectCountry,
      // genres: data.selectGenre,
      // order: data.radioRatingYear,
      // ratingFrom: data.ratingFrom,
      // ratingTo: data.ratingTo,
      // yearFrom: data.yearsFrom,
      // yearTo: data.yearsTo,
      keyword: data.movieName,
      // page: 1,
    };

    // Преобразование объекта с фильтрами в строку параметров запроса
    const params = new URLSearchParams(filters).toString();
    console.log(params);
    fetchFilmFilterThunk(params);
    dispatch(recordFilterData(data));
    setIcoFilterActive(true);
    navigate(RoutePath.FILTER);
    if (FilterData) {
      setFilterOpen(false);
      navigate(RoutePath.FILTER);
    }
  };

  return (
    <>
      <div className={`${style.icoContainer} ${icoFilterActive && style.icoContainerActive}`}>
        <div className={style.dot} />
        <button type='button' onClick={toggleDrawer(true)}>
          <SvgFilter className={style.icoFilter} />
        </button>
      </div>
      <Drawer anchor={'right'} open={filterOpen} onClose={toggleDrawer(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className={`${style.wrapperForm} ${filterOpen && style.filterActive}`}>
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
                <InputRadioFilter control={control} label={FilterTitle.RATING} valueOption={FilterRadio.RATING} />
                <InputRadioFilter control={control} label={FilterTitle.YEARS} valueOption={FilterRadio.YEAR} />
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
