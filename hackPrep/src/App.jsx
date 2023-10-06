import React from 'react';
import Cards from './Cards'; // Adjust the path to your Cards component
import Navbar from './Navbar'; // Adjust the path to your Navbar component
import Sidebar from './Sidebar'; // Adjust the path to your Sidebar component

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="mainArea">
        <Cards />
      </div>
    </div>
  );
}

export default App;
