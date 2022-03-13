import React, { useState, useEffect } from "react";
import { getSeedById } from "../../modules/SeedManager";
import "./SeedSpotlight.css";

export const SeedSpotlight = ({ seedId }) => {
  //props
  const [seed, setSeed] = useState({}); //creating state

  useEffect(() => {
    getSeedById(seedId).then((seed) => {
      setSeed(seed);
    });
  }, [seedId]); //getting animal by ID that comes from - helps the reload button do it's thing multiple times

  return (
    <div className="seed-spotlight">
      <img src={require("./flowers1.jpg")} alt="My Seed" />
      <div>
        <h3>{seed.name}</h3>
        <p></p>
      </div>
    </div>
  );
};
