// App.js
import React from 'react';
import Hero from './components/hero';
import Clients from './components/clients';
import CoworkingSpace from './components/coworking-space';
import Decoration from './components/decoration';
import Pricing from './components/pricing';
import Customers from './components/customers';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Clients />
      <CoworkingSpace/>
      <Decoration/>
      <Pricing/>
      <Customers/>
      <Blogs/>
    </div>
  );
}

export default App;
