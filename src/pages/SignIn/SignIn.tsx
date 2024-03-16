import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useEffect, useState } from 'react';
import { addCurrentUser } from '../../store/Slice/usersSlice';
import ModalAuth from '../../components/ModalAuth/ModalAuth';

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(users);
  }, [users]);

  function handleLogin(name: string, email: string, password: string) {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      dispatch(addCurrentUser(user.userId));
      navigate(RoutePath.ROOT);
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <ModalAuth open={open} setOpen={setOpen} />
      <Authorization>
        <FormAuth nameForm='Sign In' location={location.pathname} handleClick={handleLogin} />
      </Authorization>
    </>
  );
}

// в эту функцию приходят данные email и password
// function login(email: string, password: string) {}

// напиши как в этой функции проверить массив типа
// users: [
//   {
//     userId: 'u1tds-324lds-ssl342',
//     name: 'Tom Shepard',
//     email: 'shepard@gmail.com',
//     password: 'dfgdfgdf',
//     filmFavorites: [5047468, 4540126],
//   },
// ]
// и если там есть совпадение по обоим ключам email и password, то отправить эти данные в console.log()
