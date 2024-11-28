// App.js
import React from 'react';
import Hero from './components/hero';
import Clients from './components/clients';
import CoworkingSpace from './components/coworking-space';
import Decoration from './components/decoration';
import Pricing from './components/pricing';

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Clients />
      <CoworkingSpace/>
      <Decoration/>
      <Pricing/>
    </div>
  );
}

export default App;
