// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { GenresFilm } from './Filter.type';

// import style from './SelectAutoMulti.module.scss';
// import { SvgCheck } from '../../svg/SvgCheck';

// export default function SelectAutoMulti() {
//   return (
//     <Autocomplete
//       className={style.wrapper}
//       options={GenresFilm}
//       disableCloseOnSelect
//       multiple
//       getOptionLabel={(option) => option.genre}
//       renderOption={(props, option, { selected }) => (
//         <li className={style.btn} {...props}>
//           {selected && <SvgCheck className={style.сheck} />}
//           {option.genre}
//         </li>
//       )}
//       renderInput={(params) => <TextField className={style.text} {...params} placeholder='Favorites' />}
//     />
//   );
// }
