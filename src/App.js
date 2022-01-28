import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Beers from "./Pages/Beers";
import NewBeer from "./Pages/NewBeer";
import RandomBeer from "./Pages/RandomBeer";
import BeerDetails from "./Pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="beers" element={<Beers />} />
        <Route path="beers/:id" element={<BeerDetails />} />
        <Route path="random-beer" element={<RandomBeer />} />
        <Route path="new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
