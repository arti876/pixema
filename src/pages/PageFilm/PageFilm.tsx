import BtnFavorites from '../../components/BtnFavorites/BtnFavorites';
import BtnShare from '../../components/BtnShare/BtnShare';
import style from './PageFilm.module.scss';
import { SvgImdb } from '../../svg/svg';
import Recommendations from '../../components/Recommendations/Recommendations';

export default function PageFilm() {
  const genres = ['Adventure', 'Action', 'Fantasy'];
  const filmTitleContent = 'Wonder Woman: 1984';
  const ratingKinopoiskContent = '7.6';
  const ratingImdbContent = '7.6';
  const movieLengthContent = '130 min';

  return (
    <div className={style.wrapper}>
      <div className={style.containerLeft}>
        <div className={style.imgContainer}>
          <img src='/public/starwars.jpg' alt={'starwars'} />
        </div>
        <div className={style.btnContainer}>
          <BtnFavorites className={style.btnFavorites} />
          <BtnShare className={style.btnShare} />
        </div>
      </div>
      <div className={style.containerRight}>
        <div className={style.filmGenreContainer}>
          {genres.map((genre, index, arr) => (
            <div className={style.filmGenreContainer} key={index}>
              <div className={style.filmGenre}>{genre}</div>
              {index < arr.length - 1 && <div className={style.separator} />}
            </div>
          ))}
        </div>
        <div className={style.filmTitle}>{filmTitleContent}</div>
        <div className={style.containerRating}>
          <div className={style.ratingKinopoisk}>{ratingKinopoiskContent}</div>
          <div className={style.ratingImdb}>
            <SvgImdb className={style.icoImdb} />
            {ratingImdbContent}
          </div>
          <div className={style.movieLength}>{movieLengthContent}</div>
        </div>
        <div className={style.filmDescription}>
          In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of
          Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian
          Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana Prince
          becomes embroiled in a sinister conspiracy of global proportions when a transparent, golden-yellow citrine
          gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord.
        </div>
        <div className={style.filmDetails}>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'Year'}</div>
            <div className={style.filmDetailsRight}>{'2011'}</div>
          </div>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'Released'}</div>
            <div className={style.filmDetailsRight}>{'15 Jul 2011'}</div>
          </div>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'BoxOffice'}</div>
            <div className={style.filmDetailsRight}>{'$381,409,310'}</div>
          </div>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'Country'}</div>
            <div className={style.filmDetailsRight}>{'United Kingdom, United States'}</div>
          </div>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'Production'}</div>
            <div className={style.filmDetailsRight}>{'Heyday Films, Moving Picture Company, Warner Bros.'}</div>
          </div>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'Actors'}</div>
            <div className={style.filmDetailsRight}>{'Daniel Radcliffe, Emma Watson, Rupert Grint'}</div>
          </div>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'Director'}</div>
            <div className={style.filmDetailsRight}>{'David Yates'}</div>
          </div>
          <div className={style.filmDetailsItem}>
            <div className={style.filmDetailsLeft}>{'Writers'}</div>
            <div className={style.filmDetailsRight}>{'J.K. Rowling, Steve Kloves'}</div>
          </div>
        </div>
        <Recommendations />
      </div>
    </div>
  );
}
