import { SvgSpinner } from '../../svg/svg';
import style from './Loader.module.scss';

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loaderText}>Loading...</div>
      <SvgSpinner className={`${style.loaderIco} ${loading && style.active}`} />
    </div>
  );
}
