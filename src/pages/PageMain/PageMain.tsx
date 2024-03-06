import PosterList from '../../components/PosterList/PosterList';
import ShowMore from '../../components/ShowMore/ShowMore';
import { useAppSelector } from '../../store/store';
import style from './PageMain.module.scss';

export default function PageMain() {
  const { movie } = useAppSelector((state) => state.movie);

  return (
    <>
      <div className={style.wrapper}>
        <PosterList posters={movie} />
      </div>
      <ShowMore />
    </>
  );
}
