import React, { useState } from 'react';
import './new-animal.scss';
import NewAnimalForm from '../../components/new-animal-form/new-animal-form';
import axios from 'axios';

const NewAnimal = () => {
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    age: '',
    breed: '',
    microchip: false,
    microchip_number: '',
    notes: '',
  });

  // takes input to update the newAnimal form
  const handleChange = e => {
    e.preventDefault();
    setNewAnimal(
      Object.assign({}, newAnimal, { [e.target.name]: e.target.value })
    );
  };

  // posts data to api backend
  const handleSubmit = e => {
    e.preventDefault();
    
    console.log(newAnimal.microchip)

    newAnimal.microchip_number === '' ? setNewAnimal({microchip: false}) : setNewAnimal({microchip: true})

    axios
      .post('/api/v1/animals', { ...newAnimal })
      .then(resp => {
          console.log('yay')
      })
      .catch(data => console.log('Error', data));
  };

  return <NewAnimalForm handleChange={handleChange} handleSubmit={handleSubmit}/>;
};

export default NewAnimal;