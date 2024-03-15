import { IPoster } from '../Poster/IPoster.type';
import Poster from '../Poster/Poster';

interface PosterListProps {
  posters: {
    films: IPoster[];
    favorites: IPoster[];
  };
  pageName: string;
}

export default function PosterList({ posters: { films, favorites }, pageName }: PosterListProps) {
  if (films.length > 0) {
    return films.map((data, index) => <Poster key={index} poster={data} pageName={pageName} />);
  } else if (favorites.length > 0) {
    return favorites.map((data, index) => <Poster key={index} poster={data} pageName={pageName} />);
  }
}
