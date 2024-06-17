import React, { useEffect, useState } from 'react';
import api from '../api/axios'; // import the Axios instance

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div> // Adjust according to your data structure
      ))}
    </div>
  );
};

export default FetchDataComponent;
