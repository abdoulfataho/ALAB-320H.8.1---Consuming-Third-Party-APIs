import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    }

    fetchStarships();
  }, []);

  return (
    <div className="App">
      {starships.map((starship) => (
        <div key={starship.name} className="starship-card">
          {starship.name}
        </div>
      ))}
    </div>
  );
}

export default App;
