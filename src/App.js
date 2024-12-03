// App.js
import React from 'react';
import Hero from './components/hero';
import Clients from './components/clients';
import CoworkingSpace from './components/coworking-space';
import Decoration from './components/decoration';
import Pricing from './components/pricing';
import Customers from './components/customers';
import Blogs from './components/Blogs';
import Subscription from './components/subscription';
import Footer from './components/footer';
import LocationCard from './components/Location';

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
      <LocationCard/>
      <Subscription/>
      <Footer/>
    </div>
  );
}

export default App;
