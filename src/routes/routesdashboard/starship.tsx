import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layoutdashboard from "../../layout/layoutdashboard"
//import starNave from "../img/nave.png";

interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[]; // Array de URLs a las películas en las que aparece
  pilots: string[]; // Array de URLs a los pilotos
  starship_class: string;
  url: string; // URL única de la nave espacial
}

const Starships = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [selectedStarship, setSelectedStarship] = useState('');

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarships(response.data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  const handleStarshipChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStarship(event.target.value);
  };

  return (
    <Layoutdashboard>
    <div className='dash1'>
      <h1>Lista de Naves Espaciales</h1>
      <select value={selectedStarship} onChange={handleStarshipChange} className='dash2'>
        <option  value="">Selecciona una nave espacial</option>
        {starships.map((starship) => (
          <option key={starship.name} value={starship.name}>
            {starship.name}
          </option>
        ))}
      </select>

      {selectedStarship && (
        <div className='dash'>
          <h2 className='h2dash'>Detalles de {selectedStarship}</h2>
          {/* Mostrar más detalles de la nave espacial seleccionada */}
          <p>MGLT: {starships.find((starship) => starship.name === selectedStarship)?.MGLT}</p>
          <p>Cargo Capacity: {starships.find((starship) => starship.name === selectedStarship)?.cargo_capacity}</p>
          <p>Consumables: {starships.find((starship) => starship.name === selectedStarship)?.consumables}</p>
          <p>Cost in Credits: {starships.find((starship) => starship.name === selectedStarship)?.cost_in_credits}</p>
          <p>Crew: {starships.find((starship) => starship.name === selectedStarship)?.crew}</p>
          <p>Hyperdrive Rating: {starships.find((starship) => starship.name === selectedStarship)?.hyperdrive_rating}</p>
          <p>Length: {starships.find((starship) => starship.name === selectedStarship)?.length}</p>
          <p>Manufacturer: {starships.find((starship) => starship.name === selectedStarship)?.manufacturer}</p>
          <p>Max Atmosphering Speed: {starships.find((starship) => starship.name === selectedStarship)?.max_atmosphering_speed}</p>
          <p>Model: {starships.find((starship) => starship.name === selectedStarship)?.model}</p>
          <p>Passengers: {starships.find((starship) => starship.name === selectedStarship)?.passengers}</p>
          <p>Starship Class: {starships.find((starship) => starship.name === selectedStarship)?.starship_class}</p>
          <p>URL: {starships.find((starship) => starship.name === selectedStarship)?.url}</p>
          {/* Agrega más propiedades según sea necesario */}
        </div>
      )}
    
    </div>
    </Layoutdashboard>

  );
};

export default Starships;
