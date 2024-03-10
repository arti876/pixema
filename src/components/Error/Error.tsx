import style from './Error.module.scss';

interface ErrorProps {
  errorMessage: string | unknown;
}

export default function Error({ errorMessage }: ErrorProps) {
  return <div className={style.rejected}>{`Error: ${errorMessage}`}</div>;
}
