import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Planet {
  name: string;
  climate: string;
  diameter: string;
  // Agrega más propiedades según sea necesario
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
          {/* Agrega más propiedades según sea necesario */}
        </div>
      )}
    </div>
  );
};

export default Planet;
