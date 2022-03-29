import React, { useState, useEffect } from "react";
import { getSeedById, deleteSeed } from "../../modules/SeedManager";
import "./SeedDetail.css";
import { useParams, useNavigate } from "react-router-dom";

export const SeedDetail = () => {
  const [seed, setSeed] = useState({
    name: "",
    latinName: "",
    packedForDate: "",
    directSow: "",
    daysToGerminate: "",
    daysToMaturity: "",
    seedSpacing: "",
    temperature: "",
    lightNeeds: "",
    origin: "",
    frostHardy: "",
    details: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const { seedId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteSeed(seedId).then(() => navigate("/seeds"));
  };

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", seedId);
    getSeedById(seedId).then((seed) => {
      setSeed(seed);
      setIsLoading(false);
    });
  }, [seedId]);

  return (
    <section className="seed">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
      </style>
      <h3 className="seed__name">Seed Name: {seed.name}</h3>
      <div className="seed__latinName">Latin Name: {seed.latinName}</div>
      <div className="seed__packedForDate">
        Packed for Date: {seed.packedForDate}
      </div>
      <div className="seed__directSow">Direct Sow: {seed.directSow}</div>
      <div className="seed__daysToGerminate">
        Days To Germinate: {seed.daysToGerminate}
      </div>
      <div className="seed__daysToMaturity">
        Days To Maturity: {seed.daysToMaturity}
      </div>
      <div className="seed__seedSpacing">Seed Spacing: {seed.seedSpacing}</div>
      <div className="seed__temperature">Temperature: {seed.temperature}</div>
      <div className="seed__lightNeeds">Light Needs: {seed.lightNeeds}</div>
      <div className="seed__origin">Origin: {seed.origin}</div>
      <div className="seed__frostHardy">Frost Hardy: {seed.frostHardy}</div>
      <div className="seed__details">Details: {seed.details}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}

      {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
        Delete
      </button> */}
    </section>
  );
};

// 1. Component loads
// 2. The initial state is created with empty values for name and breed.
// 3. The component renders displaying those empty values for name and breed.
// 4. The function passed to useEffect() is invoked, getting data for one animal.
// 5. Data for one animal loaded, setAnimal() is invoked with the details.
// 6. The component runs again (it re-renders) to display the new animal details.
