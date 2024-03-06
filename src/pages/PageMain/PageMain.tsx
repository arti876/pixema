import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppSelector } from '../../store/store';
import style from './PageMain.module.scss';

export default function PageMain() {
  const { film } = useAppSelector((state) => state.film);

  return (
    <>
      <div className={style.wrapper}>
        <PosterList posters={film} />
      </div>
      <ShowMore />
    </>
  );
}
