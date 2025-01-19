import React from "react";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import { Cart } from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <AllRoutes />
      </main>
    </div>
  );
};

export default App;
