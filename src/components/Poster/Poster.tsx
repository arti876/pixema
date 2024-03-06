import style from './Poster.module.scss';
import { IFilm } from '../..';

interface PosterProps {
  posters: IFilm;
}

export default function Poster({ posters }: PosterProps) {
  return (
    <>
      {posters && (
        <div>
          <div className={style.imgContainer}>
            {posters.ratingImdb && (
              <div className={style.rating}>{posters.ratingImdb}</div>
            )}
            <img src={posters.posterUrl} alt='starwars' />
          </div>
          <div className={style.movieTitle}>{posters.nameRu}</div>
          <div className={style.movieGenreContainer}>
            {posters.genres.map(({ genre }, index, arr) => (
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
