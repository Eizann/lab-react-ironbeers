import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [searchedString, setSearchedString] = useState("");

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchedString}`
      )
      .then((response) => setBeers(response.data))
      .catch((e) => console.log(e));
  }, [searchedString]);

  return (
    <>
      <NavBar />
      <h2>All Beers</h2>
      <input
        type="text"
        name="searchedString"
        value={searchedString}
        onChange={(e) => {
          setSearchedString(e.target.value);
          console.log(searchedString);
        }}
      />
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
