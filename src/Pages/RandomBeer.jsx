import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const RandomBeer = () => {
  const [myBeer, setMyBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setMyBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(myBeer);

  return (
    <div>
      <NavBar />
      <img style={{ width: 50 }} src={myBeer.image_url} alt={myBeer.name} />
      <h3>{myBeer.name}</h3>
      <p>{myBeer.tagline}</p>
      <p>{myBeer.first_brewed}</p>
      <p>{myBeer.attenuation_level}</p>
      <p>{myBeer.description}</p>
      <p>{myBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
