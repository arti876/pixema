import { IFilmThunkParams } from '../../store/Slice/filmSlice';

// interface IFilter {
//   keyword: string;
//   order: string;
//   yearFrom: number | '';
//   yearTo: number | '';
//   ratingFrom: number | '';
//   ratingTo: number | '';
//   countries: string;
//   genres: string;
// }

const FilterData: IFilmThunkParams = {
  keyword: '',
  order: 'RATING',
  yearFrom: '',
  yearTo: '',
  ratingFrom: '',
  ratingTo: '',
  countries: '',
  genres: '',
};

type FilterNameType =
  | 'keyword'
  | 'order'
  | 'yearFrom'
  | 'yearTo'
  | 'ratingFrom'
  | 'ratingTo'
  | 'countries'
  | 'genres';

enum FilterLocales {
  FILTER_TITLE = 'Filters',
}

enum FilterRadio {
  RATING = 'RATING',
  YEAR = 'YEAR',
}

enum FilterName {
  MOVIE_NAME = 'keyword',
  RADIO_RATING_YEAR = 'order',
  SELECT_CONTRY = 'countries',
  SELECT_GENRE = 'genres',
  YEARS_FROM = 'yearFrom',
  YEARS_TO = 'yearTo',
  RATING_FROM = 'ratingFrom',
  RATING_TO = 'ratingTo',
}

enum FilterBtnName {
  CLEAR_FILTER = 'Clear filter',
  SHOW_RESULTS = 'Show results',
  YEAR = 'Year',
  RATING = 'Rating',
}

enum FilterTitle {
  FILTERS = 'Filters',
  MOVIE_NAME = 'Full or short movie name',
  SORT_BY = 'Sort by',
  RATING = 'Rating',
  GENRE = 'Genre',
  YEARS = 'Years',
  CONTRY = 'Country',
}

enum FilterPlaceholder {
  YOUR_TEXT = 'Your text',
  FROM = 'From',
  TO = 'To',
  SELECT_CONTRY = 'Select country',
  SELECT_GENRE = 'Select genre',
}

interface IOptionSelectFilm {
  id: number;
  name: string;
}

const GenresFilm: IOptionSelectFilm[] = [
  {
    id: 1,
    name: 'триллер',
  },
  {
    id: 2,
    name: 'драма',
  },
  {
    id: 3,
    name: 'криминал',
  },
  {
    id: 4,
    name: 'мелодрама',
  },
  {
    id: 5,
    name: 'детектив',
  },
  {
    id: 6,
    name: 'фантастика',
  },
  {
    id: 7,
    name: 'приключения',
  },
  {
    id: 8,
    name: 'биография',
  },
  {
    id: 9,
    name: 'фильм-нуар',
  },
  {
    id: 10,
    name: 'вестерн',
  },
  {
    id: 11,
    name: 'боевик',
  },
  {
    id: 12,
    name: 'фэнтези',
  },
  {
    id: 13,
    name: 'комедия',
  },
  {
    id: 14,
    name: 'военный',
  },
  {
    id: 15,
    name: 'история',
  },
  {
    id: 16,
    name: 'музыка',
  },
  {
    id: 17,
    name: 'ужасы',
  },
  {
    id: 18,
    name: 'мультфильм',
  },
  {
    id: 19,
    name: 'семейный',
  },
  {
    id: 20,
    name: 'мюзикл',
  },
  {
    id: 21,
    name: 'спорт',
  },
  {
    id: 22,
    name: 'документальный',
  },
  {
    id: 23,
    name: 'короткометражка',
  },
  {
    id: 24,
    name: 'аниме',
  },
  {
    id: 26,
    name: 'новости',
  },
  {
    id: 27,
    name: 'концерт',
  },
  {
    id: 28,
    name: 'для взрослых',
  },
  {
    id: 29,
    name: 'церемония',
  },
  {
    id: 30,
    name: 'реальное ТВ',
  },
  {
    id: 31,
    name: 'игра',
  },
  {
    id: 32,
    name: 'ток-шоу',
  },
  {
    id: 33,
    name: 'детский',
  },
];

const CountriesFilm: IOptionSelectFilm[] = [
  {
    id: 1,
    name: 'США',
  },
  {
    id: 2,
    name: 'Швейцария',
  },
  {
    id: 3,
    name: 'Франция',
  },
  {
    id: 4,
    name: 'Польша',
  },
  {
    id: 5,
    name: 'Великобритания',
  },
  {
    id: 6,
    name: 'Швеция',
  },
  {
    id: 7,
    name: 'Индия',
  },
  {
    id: 8,
    name: 'Испания',
  },
  {
    id: 9,
    name: 'Германия',
  },
  {
    id: 10,
    name: 'Италия',
  },
  {
    id: 11,
    name: 'Гонконг',
  },
  {
    id: 12,
    name: 'Германия (ФРГ)',
  },
  {
    id: 13,
    name: 'Австралия',
  },
  {
    id: 14,
    name: 'Канада',
  },
  {
    id: 15,
    name: 'Мексика',
  },
  {
    id: 16,
    name: 'Япония',
  },
  {
    id: 17,
    name: 'Дания',
  },
  {
    id: 18,
    name: 'Чехия',
  },
  {
    id: 19,
    name: 'Ирландия',
  },
  {
    id: 20,
    name: 'Люксембург',
  },
  {
    id: 21,
    name: 'Китай',
  },
  {
    id: 22,
    name: 'Норвегия',
  },
  {
    id: 23,
    name: 'Нидерланды',
  },
  {
    id: 24,
    name: 'Аргентина',
  },
  {
    id: 25,
    name: 'Финляндия',
  },
  {
    id: 26,
    name: 'Босния и Герцеговина',
  },
  {
    id: 27,
    name: 'Австрия',
  },
  {
    id: 28,
    name: 'Тайвань',
  },
  {
    id: 29,
    name: 'Новая Зеландия',
  },
  {
    id: 30,
    name: 'Бразилия',
  },
  {
    id: 31,
    name: 'Чехословакия',
  },
  {
    id: 32,
    name: 'Мальта',
  },
  {
    id: 33,
    name: 'СССР',
  },
  {
    id: 34,
    name: 'Россия',
  },
  {
    id: 35,
    name: 'Югославия',
  },
  {
    id: 36,
    name: 'Португалия',
  },
  {
    id: 37,
    name: 'Румыния',
  },
  {
    id: 38,
    name: 'Хорватия',
  },
  {
    id: 39,
    name: 'ЮАР',
  },
  {
    id: 40,
    name: 'Куба',
  },
  {
    id: 41,
    name: 'Колумбия',
  },
  {
    id: 42,
    name: 'Израиль',
  },
  {
    id: 43,
    name: 'Намибия',
  },
  {
    id: 44,
    name: 'Турция',
  },
  {
    id: 45,
    name: 'Бельгия',
  },
  {
    id: 46,
    name: 'Сальвадор',
  },
  {
    id: 47,
    name: 'Исландия',
  },
  {
    id: 48,
    name: 'Венгрия',
  },
  {
    id: 49,
    name: 'Корея Южная',
  },
  {
    id: 50,
    name: 'Лихтенштейн',
  },
  {
    id: 51,
    name: 'Болгария',
  },
  {
    id: 52,
    name: 'Филиппины',
  },
  {
    id: 53,
    name: 'Доминикана',
  },
  {
    id: 54,
    name: '',
  },
  {
    id: 55,
    name: 'Марокко',
  },
  {
    id: 56,
    name: 'Таиланд',
  },
  {
    id: 57,
    name: 'Кения',
  },
  {
    id: 58,
    name: 'Пакистан',
  },
  {
    id: 59,
    name: 'Иран',
  },
  {
    id: 60,
    name: 'Панама',
  },
  {
    id: 61,
    name: 'Аруба',
  },
  {
    id: 62,
    name: 'Ямайка',
  },
  {
    id: 63,
    name: 'Греция',
  },
  {
    id: 64,
    name: 'Тунис',
  },
  {
    id: 65,
    name: 'Кыргызстан',
  },
  {
    id: 66,
    name: 'Пуэрто Рико',
  },
  {
    id: 67,
    name: 'Казахстан',
  },
  {
    id: 68,
    name: 'Югославия (ФР)',
  },
  {
    id: 69,
    name: 'Алжир',
  },
  {
    id: 70,
    name: 'Германия (ГДР)',
  },
  {
    id: 71,
    name: 'Сингапур',
  },
  {
    id: 72,
    name: 'Словакия',
  },
  {
    id: 73,
    name: 'Афганистан',
  },
  {
    id: 74,
    name: 'Индонезия',
  },
  {
    id: 75,
    name: 'Перу',
  },
  {
    id: 76,
    name: 'Бермуды',
  },
  {
    id: 77,
    name: 'Монако',
  },
  {
    id: 78,
    name: 'Зимбабве',
  },
  {
    id: 79,
    name: 'Вьетнам',
  },
  {
    id: 80,
    name: 'Антильские Острова',
  },
  {
    id: 81,
    name: 'Саудовская Аравия',
  },
  {
    id: 82,
    name: 'Танзания',
  },
  {
    id: 83,
    name: 'Ливия',
  },
  {
    id: 84,
    name: 'Ливан',
  },
  {
    id: 85,
    name: 'Кувейт',
  },
  {
    id: 86,
    name: 'Египет',
  },
  {
    id: 87,
    name: 'Литва',
  },
  {
    id: 88,
    name: 'Венесуэла',
  },
  {
    id: 89,
    name: 'Словения',
  },
  {
    id: 90,
    name: 'Чили',
  },
  {
    id: 91,
    name: 'Багамы',
  },
  {
    id: 92,
    name: 'Эквадор',
  },
  {
    id: 93,
    name: 'Коста-Рика',
  },
  {
    id: 94,
    name: 'Кипр',
  },
  {
    id: 95,
    name: 'Уругвай',
  },
  {
    id: 96,
    name: 'Ирак',
  },
  {
    id: 97,
    name: 'Мартиника',
  },
  {
    id: 98,
    name: 'Эстония',
  },
  {
    id: 99,
    name: 'ОАЭ',
  },
  {
    id: 100,
    name: 'Бангладеш',
  },
  {
    id: 101,
    name: 'Македония',
  },
  {
    id: 102,
    name: 'Гвинея',
  },
  {
    id: 103,
    name: 'Иордания',
  },
  {
    id: 104,
    name: 'Латвия',
  },
  {
    id: 105,
    name: 'Армения',
  },
  {
    id: 106,
    name: 'Украина',
  },
  {
    id: 107,
    name: 'Сирия',
  },
  {
    id: 108,
    name: 'Шри-Ланка',
  },
  {
    id: 109,
    name: 'Нигерия',
  },
  {
    id: 110,
    name: 'Берег Слоновой кости',
  },
  {
    id: 111,
    name: 'Грузия',
  },
  {
    id: 112,
    name: 'Сенегал',
  },
  {
    id: 113,
    name: 'Монголия',
  },
  {
    id: 114,
    name: 'Габон',
  },
  {
    id: 115,
    name: 'Замбия',
  },
  {
    id: 116,
    name: 'Албания',
  },
  {
    id: 117,
    name: 'Камерун',
  },
  {
    id: 118,
    name: 'Буркина-Фасо',
  },
  {
    id: 119,
    name: 'Узбекистан',
  },
  {
    id: 120,
    name: 'Малайзия',
  },
  {
    id: 121,
    name: 'Сербия',
  },
  {
    id: 122,
    name: 'Гана',
  },
  {
    id: 123,
    name: 'Таджикистан',
  },
  {
    id: 124,
    name: 'Гаити',
  },
  {
    id: 125,
    name: 'Конго (ДРК)',
  },
  {
    id: 126,
    name: 'Гватемала',
  },
  {
    id: 127,
    name: 'Российская империя',
  },
  {
    id: 128,
    name: 'Беларусь',
  },
  {
    id: 129,
    name: 'Молдова',
  },
  {
    id: 130,
    name: 'Азербайджан',
  },
  {
    id: 131,
    name: 'Палестина',
  },
  {
    id: 132,
    name: 'Оккупированная Палестинская территория',
  },
  {
    id: 133,
    name: 'Корея Северная',
  },
  {
    id: 134,
    name: 'Никарагуа',
  },
  {
    id: 135,
    name: 'Камбоджа',
  },
  {
    id: 136,
    name: 'Ангола',
  },
  {
    id: 137,
    name: 'Сербия и Черногория',
  },
  {
    id: 138,
    name: 'Непал',
  },
  {
    id: 139,
    name: 'Бенин',
  },
  {
    id: 140,
    name: 'Гваделупа',
  },
  {
    id: 141,
    name: 'Гренландия',
  },
  {
    id: 142,
    name: 'Гвинея-Бисау',
  },
  {
    id: 143,
    name: 'Макао',
  },
  {
    id: 144,
    name: 'Парагвай',
  },
  {
    id: 145,
    name: 'Мавритания',
  },
  {
    id: 146,
    name: 'Руанда',
  },
  {
    id: 147,
    name: 'Фарерские острова',
  },
  {
    id: 148,
    name: 'Кот-д’Ивуар',
  },
  {
    id: 149,
    name: 'Гибралтар',
  },
  {
    id: 150,
    name: 'Ботсвана',
  },
  {
    id: 151,
    name: 'Боливия',
  },
  {
    id: 152,
    name: 'Мадагаскар',
  },
  {
    id: 153,
    name: 'Кабо-Верде',
  },
  {
    id: 154,
    name: 'Чад',
  },
  {
    id: 155,
    name: 'Мали',
  },
  {
    id: 156,
    name: 'Фиджи',
  },
  {
    id: 157,
    name: 'Бутан',
  },
  {
    id: 158,
    name: 'Барбадос',
  },
  {
    id: 159,
    name: 'Тринидад и Тобаго',
  },
  {
    id: 160,
    name: 'Мозамбик',
  },
  {
    id: 161,
    name: 'Заир',
  },
  {
    id: 162,
    name: 'Андорра',
  },
  {
    id: 163,
    name: 'Туркменистан',
  },
  {
    id: 164,
    name: 'Гайана',
  },
  {
    id: 165,
    name: 'Корея',
  },
  {
    id: 166,
    name: 'Нигер',
  },
  {
    id: 167,
    name: 'Конго',
  },
  {
    id: 168,
    name: 'Того',
  },
  {
    id: 169,
    name: 'Ватикан',
  },
  {
    id: 170,
    name: 'Черногория',
  },
  {
    id: 171,
    name: 'Бурунди',
  },
  {
    id: 172,
    name: 'Папуа - Новая Гвинея',
  },
  {
    id: 173,
    name: 'Бахрейн',
  },
  {
    id: 174,
    name: 'Гондурас',
  },
  {
    id: 175,
    name: 'Судан',
  },
  {
    id: 176,
    name: 'Эфиопия',
  },
  {
    id: 177,
    name: 'Йемен',
  },
  {
    id: 178,
    name: 'Вьетнам Северный',
  },
  {
    id: 179,
    name: 'Суринам',
  },
  {
    id: 180,
    name: 'Маврикий',
  },
  {
    id: 181,
    name: 'Белиз',
  },
  {
    id: 182,
    name: 'Либерия',
  },
  {
    id: 183,
    name: 'Лесото',
  },
  {
    id: 184,
    name: 'Уганда',
  },
  {
    id: 185,
    name: 'Каймановы острова',
  },
  {
    id: 186,
    name: 'Антигуа и Барбуда',
  },
  {
    id: 187,
    name: 'Западная Сахара',
  },
  {
    id: 188,
    name: 'Сан-Марино',
  },
  {
    id: 189,
    name: 'Гуам',
  },
  {
    id: 190,
    name: 'Косово',
  },
  {
    id: 191,
    name: 'Лаос',
  },
  {
    id: 192,
    name: 'Катар',
  },
  {
    id: 193,
    name: 'Оман',
  },
  {
    id: 194,
    name: 'Американские Виргинские острова',
  },
  {
    id: 195,
    name: 'Сиам',
  },
  {
    id: 196,
    name: 'Сьерра-Леоне',
  },
  {
    id: 197,
    name: 'Эритрея',
  },
  {
    id: 198,
    name: 'Сомали',
  },
  {
    id: 199,
    name: 'Доминика',
  },
  {
    id: 200,
    name: 'Бирма',
  },
  {
    id: 201,
    name: 'Реюньон',
  },
  {
    id: 202,
    name: 'Федеративные Штаты Микронезии',
  },
  {
    id: 203,
    name: 'Самоа',
  },
  {
    id: 204,
    name: 'Американское Самоа',
  },
  {
    id: 205,
    name: 'Свазиленд',
  },
  {
    id: 206,
    name: 'Французская Полинезия',
  },
  {
    id: 207,
    name: 'Мьянма',
  },
  {
    id: 208,
    name: 'Новая Каледония',
  },
  {
    id: 209,
    name: 'Французская Гвиана',
  },
  {
    id: 210,
    name: 'Сент-Винсент и Гренадины',
  },
  {
    id: 211,
    name: 'Малави',
  },
  {
    id: 212,
    name: 'Экваториальная Гвинея',
  },
  {
    id: 213,
    name: 'Коморы',
  },
  {
    id: 214,
    name: 'Кирибати',
  },
  {
    id: 215,
    name: 'Тувалу',
  },
  {
    id: 216,
    name: 'Тимор-Лесте',
  },
  {
    id: 217,
    name: 'ЦАР',
  },
  {
    id: 218,
    name: 'Тонга',
  },
  {
    id: 219,
    name: 'Гренада',
  },
  {
    id: 220,
    name: 'Гамбия',
  },
  {
    id: 221,
    name: 'Антарктида',
  },
  {
    id: 222,
    name: 'Острова Кука',
  },
  {
    id: 223,
    name: 'Остров Мэн',
  },
  {
    id: 224,
    name: 'Внешние малые острова США',
  },
  {
    id: 225,
    name: 'Монтсеррат',
  },
  {
    id: 226,
    name: 'Маршалловы острова',
  },
  {
    id: 227,
    name: 'Бруней-Даруссалам',
  },
  {
    id: 228,
    name: 'Сейшельские острова',
  },
  {
    id: 229,
    name: 'Палау',
  },
  {
    id: 230,
    name: 'Сент-Люсия',
  },
  {
    id: 231,
    name: 'Вануату',
  },
  {
    id: 232,
    name: 'Мальдивы',
  },
  {
    id: 233,
    name: 'Босния',
  },
  {
    id: 234,
    name: 'Уоллис и Футуна',
  },
  {
    id: 235,
    name: 'Белоруссия',
  },
  {
    id: 236,
    name: 'Киргизия',
  },
  {
    id: 239,
    name: 'Джибути',
  },
  {
    id: 240,
    name: 'Виргинские Острова (США)',
  },
  {
    id: 241,
    name: 'Северная Македония',
  },
  {
    id: 242,
    name: 'Виргинские Острова (Великобритания)',
  },
  {
    id: 3545269,
    name: 'Сент-Люсия ',
  },
  {
    id: 3781461,
    name: 'Сент-Китс и Невис',
  },
  {
    id: 3985922,
    name: 'Соломоновы Острова',
  },
  {
    id: 4336645,
    name: 'Виргинские Острова',
  },
  {
    id: 7801402,
    name: 'Фолклендские острова',
  },
  {
    id: 10842163,
    name: 'Остров Святой Елены',
  },
  {
    id: 32518739,
    name: 'острова Теркс и Кайкос',
  },
  {
    id: 47738117,
    name: 'Мелкие отдаленные острова США',
  },
  {
    id: 65870322,
    name: 'Сан-Томе и Принсипи',
  },
];

export {
  FilterLocales,
  FilterName,
  FilterData,
  FilterBtnName,
  FilterTitle,
  FilterPlaceholder,
  FilterRadio,
  CountriesFilm,
  GenresFilm,
};
export type { IOptionSelectFilm, FilterNameType };
