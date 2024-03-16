import { IPoster } from '../Poster/IPoster.type';
import Poster from '../Poster/Poster';

interface PosterListProps {
  posters: IPoster[];
  pageName: string;
  filmFavorites: number[];
}

export default function PosterList({ posters, pageName, filmFavorites }: PosterListProps) {
  return (
    <>
      {posters.length &&
        posters.map((data, index) => (
          <Poster key={index} poster={data} pageName={pageName} filmFavorites={filmFavorites} />
        ))}
    </>
  );
}
