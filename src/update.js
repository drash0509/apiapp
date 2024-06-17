import React, { useState } from 'react';
import api from '../api/axios';

const UpdateDataComponent = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/your-endpoint/${id}`, { name }); // Replace with your endpoint and data
      console.log('Update successful:', response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateDataComponent;
