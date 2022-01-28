import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <h2>All Beers</h2>

      {beers.map((beer, i) => {
        return (
          <div className="beer-container" key={i}>
            <img src={beer.image_url} alt="" />
            <div className="beer">
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <b>Created by : {beer.contributed_by}</b>
              <Link to={beer._id} beers={beers}>
                Check details
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Beers;
