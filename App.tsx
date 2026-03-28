import React from 'react';
import { movies } from './movies';
import MovieCard from './components/MovieCard'; // Создадим отдельный компонент
import './App.css';

// Создаем отдельный компонент для заголовка
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Большой каталог фильмов</h1>
    </header>
  );
};

// Создаем компонент для списка фильмов
const MovieList: React.FC = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default App;
