import { IPosters } from '../..';
import Poster from '../Poster/Poster';

interface PosterListProps {
  posters: IPosters[];
}

export default function PosterList({ posters }: PosterListProps) {
  return (
    <>
      {posters.map((data, index) => (
        <Poster key={index} posters={data} />
      ))}
    </>
  );
}
