import React, { Suspense } from "react";

// Lazy loading the components
const Hero = React.lazy(() => import("./components/hero"));
const Clients = React.lazy(() => import("./components/clients"));
const CoworkingSpace = React.lazy(() => import("./components/coworking-space"));
const Decoration = React.lazy(() => import("./components/decoration"));
const Pricing = React.lazy(() => import("./components/pricing"));
const Customers = React.lazy(() => import("./components/customers"));
const Blogs = React.lazy(() => import("./components/Blogs"));
const Subscription = React.lazy(() => import("./components/subscription"));
const Footer = React.lazy(() => import("./components/footer"));
const LocationCard = React.lazy(() => import("./components/Location"));

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Clients />
        <CoworkingSpace />
        <Decoration />
        <Pricing />
        <Customers />
        <Blogs />
        <LocationCard />
        <Subscription />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
