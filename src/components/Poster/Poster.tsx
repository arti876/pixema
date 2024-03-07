import style from './Poster.module.scss';
import { IFilm } from '../../Constants/IFilm.constants';

interface PosterProps {
  poster: IFilm;
}

export default function Poster({ poster }: PosterProps) {
  return (
    <>
      {!!poster && (
        <div>
          <div className={style.imgContainer}>
            {poster.ratingImdb && (
              <div className={style.rating}>{poster.ratingImdb}</div>
            )}
            <img src={poster.posterUrl} alt='starwars' />
          </div>
          <div className={style.movieTitle}>{poster.nameRu}</div>
          <div className={style.movieGenreContainer}>
            {poster.genres.map(({ genre }, index, arr) => (
              <div className={style.movieGenreContainer} key={index}>
                <div className={style.movieGenre}>{genre}</div>
                {index < arr.length - 1 && <div className={style.separator} />}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
