import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const BeerDetails = () => {
  const params = useParams();

  const [myBeer, setMyBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        setMyBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, [params.id]);

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

export default BeerDetails;
