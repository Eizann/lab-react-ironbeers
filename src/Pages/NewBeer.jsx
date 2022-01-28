import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      firstBrewed,
      brewerTips,
      attenuationLevel,
      contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setError("There was an error, try again !");
      });
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        {error !== "" && <p>{error}</p>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewer Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewerTips}
            onChange={(e) => setBrewerTips(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="text"
            name="attenuation_level"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </div>
        <button>Create a new beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
