import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants/RoutePath.constants';
import FormAuth from '../../components/FormAuth/FormAuth';
import Authorization from '../Authorization/Authorization';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { addUser } from '../../store/Slice/usersSlice';
import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { useState } from 'react';

const text = {
  title: 'Email error',
  description: 'The entered EMAIL already exists, try another one.',
};

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const uniqueId = uuidv4();
  const { users } = useAppSelector((state) => state.users);

  function handleRegister(name: string, email: string, password: string) {
    const foundUser = users.find((user) => user.email === email);
    const user = {
      userId: uniqueId,
      name,
      email,
      password,
      filmFavorites: [],
    };
    if (foundUser) {
      setOpen(true);
    } else {
      dispatch(addUser(user));
      navigate(RoutePath.SIGN_IN);
    }
  }

  return (
    <>
      <ModalAuth open={open} setOpen={setOpen} text={text} />
      <Authorization>
        <FormAuth nameForm={'Sign Up'} location={location.pathname} handleClick={handleRegister} />
      </Authorization>
    </>
  );
}
