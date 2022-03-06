import React, { useState, useEffect } from 'react';
import { getSeedById } from '../../modules/SeedManager';
import './SeedDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const SeedDetail = () => {
  const [seed, setSeed] = useState(
    { name: "", latinName: "", packedForDate: "", 
    directSow: "", daysToGerminate: "", daysToMaturity: "", seedSpacing: "", temperature: "",
    lightNeeds: "", origin: "", frostHardy: "", details: "" });
    
    const [isLoading, setIsLoading] = useState(true);

  const {seedId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", seedId)
    getSeedById(seedId)
      .then(seed => {
        setSeed(seed);
        setIsLoading(false);
      });
  }, [seedId]);

  return (
    <section className="seed">
      <h3 className="seed__name">{seed.name}</h3>
      <div className="seed__latinName">{seed.latinName}</div>
      <div className="seed__packedForDate">{seed.packedForDate}</div>
      <div className="seed__directSow">{seed.directSow}</div>
      <div className="seed__daysToGerminate">{seed.daysToGerminate}</div>
      <div className="seed__daysToMaturity">{seed.daysToMaturity}</div>
      <div className="seed__seedSpacing">{seed.seedSpacing}</div>
      <div className="seed__temperature">{seed.temperature}</div>
      <div className="seed__lightNeeds">{seed.lightNeeds}</div>
      <div className="seed__origin">{seed.origin}</div>
      <div className="seed__frostHardy">{seed.frostHardy}</div>
      <div className="seed__details">{seed.details}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}

        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
    </section>
  );
}

// 1. Component loads
// 2. The initial state is created with empty values for name and breed.
// 3. The component renders displaying those empty values for name and breed.
// 4. The function passed to useEffect() is invoked, getting data for one animal.
// 5. Data for one animal loaded, setAnimal() is invoked with the details.
// 6. The component runs again (it re-renders) to display the new animal details.
