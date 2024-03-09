import { IFilm } from '../../constants/IFilm.constants';
import Poster from '../Poster/Poster';

interface PosterListProps {
  posters: IFilm[];
  pageName: string;
}

export default function PosterList({ posters, pageName }: PosterListProps) {
  return (
    <>{posters.length && posters.map((data, index) => <Poster key={index} poster={data} pageName={pageName} />)}</>
  );
}
