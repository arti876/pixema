import { IPoster } from '../Poster/IPoster.type';
import Poster from '../Poster/Poster';

interface PosterListProps {
  posters: IPoster[];
  pageName: string;
}

export default function PosterList({ posters, pageName }: PosterListProps) {
  return (
    <>
      {posters.length &&
        posters.map((data, index) => <Poster key={index} poster={data} pageName={pageName} />)}
    </>
  );
}
