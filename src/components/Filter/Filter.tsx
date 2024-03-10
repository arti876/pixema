import { useEffect, useState } from 'react';
import style from './Filter.module.scss';
import { SvgFilter } from '../../svg/SvgFilter';
import { useClickAway } from '@uidotdev/usehooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SvgClose } from '../../svg/svg';

interface IFormFilter {
  movieName: string;
  radioRatingYear: string;
}

const IFormFilterData: IFormFilter = {
  movieName: '',
  radioRatingYear: 'YEAR',
};

export enum FormFilterLocales {
  FILTERS_TITLE = 'Filters',
  MOVIE_NAME = 'Full or short movie name',
  CLEAR_FILTER = 'Clear filter',
  SHOW_RESULTS = 'Show results',
  YOUR_TEXT = 'Your text',
  SORT_BY = 'Sort by',
  RATING = 'Rating',
  YEAR = 'Year',
}

export default function Filter() {
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormFilter>(IFormFilterData);

  const { register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: IFormFilterData,
  });

  const onSubmit: SubmitHandler<IFormFilter> = (data) => {
    console.log(data);
    setFormData(data);
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
    reset();
  }

  function toggleRadioActive(value: string) {
    setFormData({ ...formData, radioRatingYear: value });
  }

  return (
    <>
      <div className={`${style.icoContainer} ${style.icoContainerActive}`}>
        <div className={style.dot} />
        <button type='button' onClick={toggleFilter}>
          <SvgFilter className={style.icoFilter} />
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={refOutside}
        className={`${style.wrapper} ${filterActive && style.filterActive}`}
      >
        <div className={style.formTitleContainer}>
          <div className={style.formTitle}>{FormFilterLocales.FILTERS_TITLE}</div>
          <button type='button' onClick={toggleFilter}>
            <SvgClose className={style.icoClose} />
          </button>
        </div>
        <label className={style.labelContainer}>
          <div className={style.labelText}>{FormFilterLocales.MOVIE_NAME}</div>
          <input
            type='text'
            placeholder={FormFilterLocales.YOUR_TEXT}
            {...register('movieName')}
            className={style.inputMovieName}
          />
        </label>
        <div className={style.labelContainer}>
          <div className={style.labelText}>{FormFilterLocales.SORT_BY}</div>
          <div className={style.inputRadioContainer}>
            <label
              className={`${style.labelRating} ${formData.radioRatingYear === 'RATING' && style.inputRadioActive}`}
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
            <label className={`${style.labelYear} ${formData.radioRatingYear === 'YEAR' && style.inputRadioActive}`}>
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
