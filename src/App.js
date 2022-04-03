import React from "react";
import Navbar from "./components/navbar";
import data from "./data";
import Travel from "./components/travel";

function App() {
  const destination = data.map((value) => (
    <Travel key={value.title} item={value} />
  ));
  return (
    <div>
      <Navbar />
      {destination}
    </div>
  );
}

export default App;
