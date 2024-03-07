import { SubmitHandler, useForm } from 'react-hook-form';
import style from './Search.module.scss';
import Icons from '../Icons/Icons';
import { IconId } from '../../Constants/IconId.constants';

interface IFormData {
  search: string;
}

export default function Search() {
  const { register, handleSubmit } = useForm({
    defaultValues: { search: '' },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <input
        type='text'
        placeholder='Search'
        {...register('search')}
        className={style.inputSearch}
      />
      <div className={`${style.icoContainer} ${style.icoContainerActive}`}>
        <div className={style.dot} />
        <button type='button'>
          <Icons className={style.icoFilter} id={IconId.FILTER} />
        </button>
      </div>
    </form>
  );
}
