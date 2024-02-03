import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layoutdashboard from "../../layout/layoutdashboard"

interface Species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
  url: string;
}

const SpeciesComponent = () => {
  const [species, setSpecies] = useState<Species[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState('');

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/species/');
        setSpecies(response.data.results);
      } catch (error) {
        console.error('Error fetching species:', error);
      }
    };

    fetchSpecies();
  }, []);

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecies(event.target.value);
  };

  return (
    <Layoutdashboard>
    <div className='dash1'>
      <h1>Lista de Especies</h1>
      <select value={selectedSpecies} onChange={handleSpeciesChange}className='dash2'>
        <option value="">Selecciona una especie</option>
        {species.map((specie) => (
          <option key={specie.name} value={specie.name}>
            {specie.name}
          </option>
        ))}
      </select>

      {selectedSpecies && (
        <div className='dash'>
          <h2 className='h2dash'>Detalles de {selectedSpecies}</h2>
          {/* Mostrar más detalles de la especie seleccionada */}
          <p>Average Height: {species.find((specie) => specie.name === selectedSpecies)?.average_height}</p>
          <p>Average Lifespan: {species.find((specie) => specie.name === selectedSpecies)?.average_lifespan}</p>
          <p>Classification: {species.find((specie) => specie.name === selectedSpecies)?.classification}</p>
          <p>Designation: {species.find((specie) => specie.name === selectedSpecies)?.designation}</p>
          <p>Eye Colors: {species.find((specie) => specie.name === selectedSpecies)?.eye_colors}</p>
          <p>Hair Colors: {species.find((specie) => specie.name === selectedSpecies)?.hair_colors}</p>
          <p>Homeworld: {species.find((specie) => specie.name === selectedSpecies)?.homeworld}</p>
          <p>Language: {species.find((specie) => specie.name === selectedSpecies)?.language}</p>
          <p>Created: {species.find((specie) => specie.name === selectedSpecies)?.created}</p>
          <p>Edited: {species.find((specie) => specie.name === selectedSpecies)?.edited}</p>
          <p>People: {species.find((specie) => specie.name === selectedSpecies)?.people.join(', ')}</p>
          <p>Films: {species.find((specie) => specie.name === selectedSpecies)?.films.join(', ')}</p>
          <p>Skin Colors: {species.find((specie) => specie.name === selectedSpecies)?.skin_colors}</p>
          {/* Agrega más propiedades según sea necesario */}
        </div>
      )}
    </div>
    </Layoutdashboard>
  );
};

export default SpeciesComponent;

