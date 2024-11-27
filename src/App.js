// App.js
import React from 'react';
import Hero from './components/hero';
import Clients from './components/clients';
import CoworkingSpace from './components/coworking-space';
import Gallery from './components/grid-gallery';

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Clients />
      <CoworkingSpace/>
      <Gallery/>
    </div>
  );
}

export default App;
