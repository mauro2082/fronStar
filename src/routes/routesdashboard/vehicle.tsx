import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layoutdashboard from "../../layout/layoutdashboard";

interface Vehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  films: string[];
  url: string;
  vehicle_class: string;
}

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/vehicles/');
        setVehicles(response.data.results);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleVehicleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVehicle(event.target.value);
  };

  return (
    <Layoutdashboard>
      <div className='dash1'>
        <h1>Lista de Vehículos</h1>
        <select value={selectedVehicle} onChange={handleVehicleChange} className='dash2'>
          <option value="">Selecciona un vehículo</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.name} value={vehicle.name}>
              {vehicle.name}
            </option>
          ))}
        </select>

        {selectedVehicle && (
          <div className='dash'>
            <h2 className='h2dash'>Detalles de {selectedVehicle}</h2>
            {/* Mostrar más detalles del vehículo seleccionado */}
            <p>Cargo Capacity: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.cargo_capacity}</p>
            <p>Consumables: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.consumables}</p>
            <p>Cost in Credits: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.cost_in_credits}</p>
            <p>Crew: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.crew}</p>
            <p>Length: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.length}</p>
            {/* Agrega más propiedades según sea necesario */}
            <p>Manufacturer: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.manufacturer}</p>
            <p>Max Atmosphering Speed: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.max_atmosphering_speed}</p>
            <p>Model: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.model}</p>
            <p>Passengers: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.passengers}</p>
            <p>Vehicle Class: {vehicles.find((vehicle) => vehicle.name === selectedVehicle)?.vehicle_class}</p>
          </div>
        )}
      </div>
    </Layoutdashboard>
  );
};

export default Vehicles;
