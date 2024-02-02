import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Planet {
    name: string;
    climate: string;
    diameter: string;
    gravity: string;
    orbital_period: string;
    population: string;
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
    created: string;
    edited: string;
    films: string[]; // Array de URLs a las películas
    residents: string[]; // Array de URLs a los residentes
  }
  

const Planet = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const handlePlanetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlanet(event.target.value);
  };

  return (
    <div>
      <h1>Lista de Planetas</h1>
      <select value={selectedPlanet} onChange={handlePlanetChange}>
        <option value="">Selecciona un planeta</option>
        {planets.map((planet) => (
          <option key={planet.name} value={planet.name}>
            {planet.name}
          </option>
        ))}
      </select>

      {selectedPlanet && (
        <div>
        <h2>Detalles de {selectedPlanet}</h2>
        {/* Puedes mostrar más detalles del planeta seleccionado aquí */}
        <p>Climate: {planets.find((planet) => planet.name === selectedPlanet)?.climate}</p>
        <p>Diameter: {planets.find((planet) => planet.name === selectedPlanet)?.diameter}</p>
        <p>Gravity: {planets.find((planet) => planet.name === selectedPlanet)?.gravity}</p>
        <p>Orbital Period: {planets.find((planet) => planet.name === selectedPlanet)?.orbital_period}</p>
        <p>Population: {planets.find((planet) => planet.name === selectedPlanet)?.population}</p>
        <p>Rotation Period: {planets.find((planet) => planet.name === selectedPlanet)?.rotation_period}</p>
        <p>Surface Water: {planets.find((planet) => planet.name === selectedPlanet)?.surface_water}</p>
        <p>Terrain: {planets.find((planet) => planet.name === selectedPlanet)?.terrain}</p>
        <p>URL: {planets.find((planet) => planet.name === selectedPlanet)?.url}</p>
        {/* Agrega más propiedades según sea necesario */}
      </div>
      
      )}
    </div>
  );
};

export default Planet;
