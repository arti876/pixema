import style from './NotFound.module.scss';
import imgNotFound from './404.jpg';

export default function NotFound() {
  return (
    <div className={style.wrapper}>
      <img className={style.img} src={imgNotFound} alt='page-not-found' />
    </div>
  );
}
