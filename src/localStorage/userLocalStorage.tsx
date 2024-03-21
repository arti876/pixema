interface IUserData {
  userId: string;
  name: string;
  email: string;
  password: string;
  filmFavorites: number[];
}

const userData: IUserData = {
  userId: '',
  name: '',
  email: '',
  password: '',
  filmFavorites: [],
};

export function getUserLocalStorage() {
  let result: IUserData = userData;
  const getUser = localStorage.getItem('user');
  if (getUser) {
    result = JSON.parse(getUser);
  }
  return result;
}

export function modificationFavorites(kinopoiskId: number) {
  const userData = getUserLocalStorage();
  const updatedFavorites = userData.filmFavorites.includes(kinopoiskId)
    ? userData.filmFavorites.filter((id) => id !== kinopoiskId)
    : [...userData.filmFavorites, kinopoiskId];

  const updatedUserData: IUserData = {
    ...userData,
    filmFavorites: updatedFavorites,
  };

  localStorage.setItem('user', JSON.stringify(updatedUserData));
}

export function updateUserData(key: string, value: string) {
  const userData = getUserLocalStorage();
  const updatedUserData: IUserData = {
    ...userData,
    [key]: value,
  };

  localStorage.setItem('user', JSON.stringify(updatedUserData));
}
