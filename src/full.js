import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const DataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/your-endpoint'); // Replace with your endpoint
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/your-endpoint/${id}`, { name }); // Replace with your endpoint and data
      console.log('Update successful:', response.data);
      // Optionally refresh data after update
      const refreshedData = await api.get('/your-endpoint');
      setData(refreshedData.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div>
        {data.map(item => (
          <div key={item.id}>{item.name}</div> // Adjust according to your data structure
        ))}
      </div>
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
    </div>
  );
};

export default DataComponent;
