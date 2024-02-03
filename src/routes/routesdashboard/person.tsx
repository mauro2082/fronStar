import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layoutdashboard from "../../layout/layoutdashboard"

interface Person {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
  homeworld: string; // URL al planeta natal
  created: string;
  edited: string;
  films: string[]; // Array de URLs a las películas en las que aparece
  species: string[]; // Array de URLs a las especies a las que pertenece
  starships: string[]; // Array de URLs a las naves espaciales que ha piloteado
  url: string; // URL única del personaje
  vehicles: string[]; // Array de URLs a los vehículos que ha conducido
}

const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState('');

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setPeople(response.data.results);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    fetchPeople();
  }, []);

  const handlePersonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerson(event.target.value);
  };

  return (
    <Layoutdashboard>
    <div className='dash1'>
      <h1>Lista de Personas</h1>
      <select value={selectedPerson} onChange={handlePersonChange}className='dash2'>
        <option value="">Selecciona una persona</option>
        {people.map((person) => (
          <option key={person.name} value={person.name}>
            {person.name}
          </option>
        ))}
      </select>

      {selectedPerson && (
        <div className='dash'>
          <h2 className='h2dash'>Detalles de {selectedPerson}</h2>
          {/* Puedes mostrar más detalles de la persona seleccionada aquí */}
          <p>Birth Year: {people.find((person) => person.name === selectedPerson)?.birth_year}</p>
          <p>Eye Color: {people.find((person) => person.name === selectedPerson)?.eye_color}</p>
          <p>Gender: {people.find((person) => person.name === selectedPerson)?.gender}</p>
          <p>Hair Color: {people.find((person) => person.name === selectedPerson)?.hair_color}</p>
          <p>Height: {people.find((person) => person.name === selectedPerson)?.height}</p>
          <p>Mass: {people.find((person) => person.name === selectedPerson)?.mass}</p>
          {/* Agrega más propiedades según sea necesario */}
        </div>
      )}
    </div>
    </Layoutdashboard>
  );
};

export default People;
