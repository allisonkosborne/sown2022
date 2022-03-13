import React, { useEffect, useState } from "react";
import { SeedCard } from "./SeedCard";
import { getAllSeeds, deleteSeed } from "../../modules/SeedManager";
import { useNavigate } from "react-router";

export const SeedList = () => {
  // The initial state is an empty array
  const [seeds, setSeeds] = useState([]);

  const navigate = useNavigate();

  const getSeeds = () => {
    return getAllSeeds().then((seedsfromAPI) => {
      setSeeds(seedsfromAPI);
    });
  };

  useEffect(() => {
    getSeeds();
  }, []);

  const handleDeleteSeed = (id) => {
    deleteSeed(id).then(() => getAllSeeds().then(setSeeds));
  };

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="seed-button"
          onClick={() => {
            navigate("/seeds/create");
          }}
        >
          Add Seed
        </button>
      </section>

      <div className="container-cards">
        {seeds.map((seed) => (
          <SeedCard
            key={seed.id}
            seed={seed}
            handleDeleteSeed={handleDeleteSeed}
          />
        ))}
      </div>
    </>
  );
};
