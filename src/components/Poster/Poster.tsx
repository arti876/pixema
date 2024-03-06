import style from './Poster.module.scss';
import { IPosters } from '../..';

interface PosterProps {
  posters: IPosters;
}

export default function Poster({ posters }: PosterProps) {
  return (
    <div>
      <div className={style.imgContainer}>
        <div className={style.rating}>{posters.rating}</div>
        <img src={posters.image} alt='starwars' />
      </div>
      <div className={style.movieTitle}>{posters.movieTitle}</div>
      <div className={style.movieGenreContainer}>
        {posters.genre.map((genre, index) => (
          <div className={style.movieGenreContainer} key={index}>
            <div className={style.movieGenre}>{genre}</div>
            {index < 2 && <div className={style.separator} />}
          </div>
        ))}
      </div>
    </div>
  );
}
