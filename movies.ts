import { Movie } from './Movie';

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Форрест Гамп',
    description: 'История простого парня с добрым сердцем.',
    year: 1994,
    poster: 'https://example.com/poster1.jpg'
  },
  {
    id: 2,
    title: 'Матрица',
    description: 'Нео узнает правду о реальности.',
    year: 1999,
    poster: 'https://example.com/poster2.jpg'
  },
  {
    id: 3,
    title: 'Интерстеллар',
    description: 'Путешествие через космос ради спасения человечества.',
    year: 2014,
    poster: 'https://example.com/poster3.jpg'
  },
  // Добавленный фильм
  {
    id: 4,
    title: 'Король говорит',
    description: 'История короля Георга VI и его борьбы с заиканием.',
    year: 2010,
    poster: 'https://example.com/poster4.jpg'
  }
];
