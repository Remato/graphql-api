import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FiXCircle,FiDelete } from 'react-icons/fi'

import { 
  Container,
  DriverList,
  RidesList,
  Form,
} from './styles';

import { CREATE_RIDE, DELETE_RIDE  } from '../../rides/ridesResolvers'

import { 
  CREATE_DRIVER, 
  DELETE_DRIVER, 
  READ_DRIVERS 
} from '../../drivers/driversResolvers';



export default function Drivers() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [value, setValue] = useState('');
  
  const { loading, error, data: drivers } = useQuery(READ_DRIVERS, {
    fetchPolicy: "network-only",
    pollInterval: 500,
  });

  const [createDriver] = useMutation(CREATE_DRIVER);
  const [deleteDriver] = useMutation(DELETE_DRIVER);
  const [createRide ] = useMutation(CREATE_RIDE);
  const [deleteRide ] = useMutation(DELETE_RIDE);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error.</p>;

  return (
    <>
      <h1>Drivers & Rides</h1>
      <Container>
        <>
          {drivers.drivers.map(driver => (
          <DriverList>
            <div>
              <FiXCircle 
                size={20} 
                color="#d9534f"
                onClick={() => {
                  deleteDriver({
                    variables: {
                      id: Number(driver.id),
                    }
                  })
                }}
              />
              <h2 key={driver.id}>
                Name: {driver.name} | Age: {driver.age}
              </h2>
              {Object.keys(driver.rides).length !== 0 ?
                <h3>Rides:</h3> :
                <h3>No rides yet</h3>}
              <RidesList>
                {driver.rides.map((ride) => (
                  <div>
                    <li key={ride.id}>
                      From: {ride.from} To: {ride.to} Value: ${ride.value}
                      <FiDelete size={20} color="#d9534f"
                        onClick={() => {deleteRide({variables: {id: ride.id}})}}
                      />
                    </li>
                  </div>
                ))}
              </RidesList>
              <Form>
                <input 
                placeholder="from" 
                onChange={event => setFrom(event.target.value)}
                ></input>
                <input 
                placeholder="to"
                onChange={event => setTo(event.target.value)}
                ></input>
                <input 
                placeholder="value: 15.00"
                type="number" step="0.10"
                onChange={event => setValue(event.target.value)}
                ></input>
                <button 
                onClick={() => {
                  createRide({variables: {
                    driver: Number(driver.id),
                    from,
                    to,
                    value: parseFloat(value),
                  }})
                }} 
                type="button">Add more Rides</button>
              </Form>
            </div>
        </DriverList>
          ))}
          <h2>Create a new Driver</h2>
          <Form>
            <input 
            placeholder="name" 
            onChange={event => setName(event.target.value)}
            ></input>
            <input 
            placeholder="age"
            type="number"
            onChange={event => setAge(event.target.value)}
            ></input>
            <button 
            onClick={() => {
              createDriver({
                variables: {
                  name,
                  age: Number(age),
                }
              })
            }} 
            type="button">Create</button>
          </Form>
          
        </>
      </Container>
    </>
  );
}