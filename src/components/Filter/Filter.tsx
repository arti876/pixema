import { useEffect, useState } from 'react';
import style from './Filter.module.scss';
import { SvgFilter } from '../../svg/SvgFilter';
import { useClickAway } from '@uidotdev/usehooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SvgClose } from '../../svg/svg';
import { CountriesFilm, FormFilterLocales, GenresFilm, IFormFilter, FormFilterData } from './Filter.type';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { recordFilterData } from '../../store/Slice/filterSlice';
import { movieNameValidation, onlyNumbersValidation } from './validationFilter';

export default function Filter() {
  const [icoFilterActive, setIcoFilterActive] = useState<boolean>(false);
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const { filterData } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  console.log(filterData);

  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: FormFilterData,
  });

  const onSubmit: SubmitHandler<IFormFilter> = (data) => {
    dispatch(recordFilterData(data));
    setIcoFilterActive(true);
    if (FormFilterData) {
      setFilterActive(false);
    }
  };

  useEffect(() => {
    if (filterActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [filterActive]);

  const refOutside = useClickAway(() => {
    if (filterActive) {
      setFilterActive(false);
    }
  });

  function toggleFilter() {
    setFilterActive(!filterActive);
  }

  function clearFilter() {
    setIcoFilterActive(false);
    dispatch(recordFilterData(FormFilterData));
    reset();
  }

  function toggleRadioActive(value: string) {
    dispatch(recordFilterData({ ...filterData, radioRatingYear: value }));
  }

  return (
    <>
      <div className={`${style.icoContainer} ${icoFilterActive && style.icoContainerActive}`}>
        <div className={style.dot} />
        <button type='button' onClick={toggleFilter}>
          <SvgFilter className={style.icoFilter} />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={refOutside}
        className={`${style.wrapperForm} ${filterActive && style.filterActive}`}
      >
        <div className={style.formTitleContainer}>
          <div className={style.formTitle}>{FormFilterLocales.FILTERS_TITLE}</div>
          <button type='button' onClick={toggleFilter}>
            <SvgClose className={style.icoClose} />
          </button>
        </div>

        <div className={style.inputWrapper}>
          <div className={style.sortContainer}>
            <div className={style.labelText}>{FormFilterLocales.SORT_BY}</div>
            <div className={style.inputRadioContainer}>
              <label
                className={`${style.labelRating} ${filterData.radioRatingYear === 'RATING' && style.inputRadioActive}`}
              >
                <div className={style.labelTextRating}>{FormFilterLocales.RATING}</div>
                <input
                  {...register('radioRatingYear')}
                  type='radio'
                  value='RATING'
                  className={style.inputRating}
                  onChange={() => toggleRadioActive('RATING')}
                />
              </label>
              <label
                className={`${style.labelYear} ${filterData.radioRatingYear === 'YEAR' && style.inputRadioActive}`}
              >
                <div className={style.labelTextYear}>{FormFilterLocales.YEAR}</div>
                <input
                  {...register('radioRatingYear')}
                  type='radio'
                  value='YEAR'
                  className={style.inputYear}
                  onChange={() => toggleRadioActive('YEAR')}
                />
              </label>
            </div>
          </div>

          <label className={style.labelContainer}>
            <div className={style.labelText}>{FormFilterLocales.MOVIE_NAME}</div>
            <input
              type='text'
              placeholder={FormFilterLocales.YOUR_TEXT}
              {...register('movieName', movieNameValidation)}
              className={style.inputMovieName}
            />
          </label>

          <label className={style.labelContainer}>
            <div className={style.labelText}>{FormFilterLocales.GENRE}</div>
            <select {...register('selectGenre')} defaultValue={''} className={style.selectContainer}>
              <option value={''} disabled hidden>
                {FormFilterLocales.SELECT_CONTRY}
              </option>
              {!!GenresFilm &&
                GenresFilm.map(({ id, genre }, index) => (
                  <option key={index} value={id} className={style.selectOption}>
                    {genre}
                  </option>
                ))}
            </select>
          </label>

          <label className={style.labelContainer}>
            <div className={style.labelText}>{FormFilterLocales.YEARS}</div>
            <div className={style.inputFromToContainer}>
              <input
                type='text'
                placeholder={FormFilterLocales.FROM}
                {...register('yearsFrom', onlyNumbersValidation)}
                className={style.inputFromTo}
              />
              <input
                type='text'
                placeholder={FormFilterLocales.TO}
                {...register('yearsTo', onlyNumbersValidation)}
                className={style.inputFromTo}
              />
            </div>
          </label>

          <label className={style.labelContainer}>
            <div className={style.labelText}>{FormFilterLocales.RATING}</div>
            <div className={style.inputFromToContainer}>
              <input
                type='text'
                placeholder={FormFilterLocales.FROM}
                {...register('ratingFrom', onlyNumbersValidation)}
                className={style.inputFromTo}
              />
              <input
                type='text'
                placeholder={FormFilterLocales.TO}
                {...register('ratingTo', onlyNumbersValidation)}
                className={style.inputFromTo}
              />
            </div>
          </label>

          <label className={style.labelContainer}>
            <div className={style.labelText}>{FormFilterLocales.CONTRY}</div>
            <select {...register('selectCountry')} defaultValue={''} className={style.selectContainer}>
              <option value={''} disabled hidden>
                {FormFilterLocales.SELECT_GENRE}
              </option>
              {!!CountriesFilm &&
                CountriesFilm.map(({ id, country }, index) => (
                  <option key={index} value={id} className={style.selectOption}>
                    {country}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <div className={style.btnContainer}>
          <button type='button' className={style.btnClearFilter} onClick={clearFilter}>
            {FormFilterLocales.CLEAR_FILTER}
          </button>
          <button type='submit' className={style.btnShowResults}>
            {FormFilterLocales.SHOW_RESULTS}
          </button>
        </div>
      </form>
    </>
  );
}
