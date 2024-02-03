import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layoutdashboard from "../../layout/layoutdashboard"

interface Film {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedFilm, setSelectedFilm] = useState('');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  const handleFilmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilm(event.target.value);
  };

  return (
    <Layoutdashboard>
        <div className='dash1'>
      <h1>Lista de Películas</h1>
      <select value={selectedFilm} onChange={handleFilmChange}className='dash2'>
        <option value="">Selecciona una película</option>
        {films.map((film) => (
          <option key={film.title} value={film.title}>
            {film.title}
          </option>
        ))}
      </select>

      {selectedFilm && (
        <div className='dash'>
          <h2 className='h2dash'>Detalles de {selectedFilm}</h2>
          {/* Mostrar más detalles de la película seleccionada */}
          <p>Director: {films.find((film) => film.title === selectedFilm)?.director}</p>
          <p>Producer: {films.find((film) => film.title === selectedFilm)?.producer}</p>
          <p>Release Date: {films.find((film) => film.title === selectedFilm)?.release_date}</p>
          <p>Episode ID: {films.find((film) => film.title === selectedFilm)?.episode_id}</p>
          <p>Opening Crawl: {films.find((film) => film.title === selectedFilm)?.opening_crawl}</p>
          <p>Created: {films.find((film) => film.title === selectedFilm)?.created}</p>
          <p>Edited: {films.find((film) => film.title === selectedFilm)?.edited}</p>
          {/* Agrega más propiedades según sea necesario */}
          <p>Characters: {films.find((film) => film.title === selectedFilm)?.characters.join(', ')}</p>
          <p>Planets: {films.find((film) => film.title === selectedFilm)?.planets.join(', ')}</p>
          <p>Species: {films.find((film) => film.title === selectedFilm)?.species.join(', ')}</p>
          <p>Starships: {films.find((film) => film.title === selectedFilm)?.starships.join(', ')}</p>
          <p>Vehicles: {films.find((film) => film.title === selectedFilm)?.vehicles.join(', ')}</p>
        </div>
      )}
    </div>
    </Layoutdashboard>
    
  );
};

export default Films;
