import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

const Home = () => {
  return (
    <>
      <h1>Iron Beeeeeeeeeeeeeers</h1>

      <Link to="beers">
        <img src={beers} alt="all beers" />
      </Link>
      <h2>All Beers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi
        esse illo doloremque maxime eveniet officiis blanditiis quisquam facere
        repudiandae sunt inventore temporibus iusto asperiores, quaerat ipsa
        similique impedit nisi.
      </p>

      <Link to="random-beer">
        <img src={randomBeer} alt="random beer" />
      </Link>
      <h2>Random Beer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        minima a hic enim voluptatem, adipisci porro quasi dignissimos
        doloremque eaque nemo, quae repudiandae consequatur sequi distinctio
        magni, perspiciatis vitae incidunt!
      </p>

      <Link to="new-beer">
        <img src={newBeer} alt="new beer" />
      </Link>
      <h2>New Beer</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quis
        deleniti sequi placeat deserunt sed, dolore blanditiis quas a. Nobis
        quibusdam voluptates dolores fugiat asperiores veritatis quo tenetur
        ratione perferendis.
      </p>
    </>
  );
};

export default Home;
