import React, { useState } from 'react';
import Axio from 'axios';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addNewNumber = () => {
    Axio.post('http://localhost:8080/add-phone', { name, phone })
      .then((response) => {
        console.log('New number added');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const viewNumber = () => {
    Axio.get(`http://localhost:8080/get-phone/${id}`)
      .then((response) => {
        const { name, phone } = response.data;
        setName(name);
        setPhone(phone);
        console.log('Number retrieved:', name, phone);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateNumber = () => {
    Axio.put(`http://localhost:8080/update-phone/${id}`, { name, phone })
      .then((response) => {
        console.log('Number updated');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNumber = () => {
    Axio.delete(`http://localhost:8080/delete-phone/${id}`)
      .then((response) => {
        console.log('Number deleted');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <center>
        <h1>Phone Book</h1>
      </center>
      <div className="form-container">
        <form>
          <div className="input-group">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" onChange={(e) => setId(e.target.value)} placeholder="Enter Your Id" />
          </div>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />
          </div>
          <div className="button-group">
            <button onClick={() => addNewNumber()}>Add </button>
            <button onClick={() => updateNumber()}>Update</button><br></br><br></br>
            <div className="button-space" />
            <button onClick={() => deleteNumber()}>Delete </button>
            <button onClick={() => viewNumber()}>View</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

