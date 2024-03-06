import { IFilm } from '../..';
import Poster from '../Poster/Poster';

interface PosterListProps {
  posters: IFilm[];
}

export default function PosterList({ posters }: PosterListProps) {
  return (
    <>
      {posters.length &&
        posters.map((data, index) => <Poster key={index} posters={data} />)}
    </>
  );
}
