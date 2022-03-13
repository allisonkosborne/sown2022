import React from "react";
import "./Seed.css";
import { Link } from "react-router-dom";
import {
  addCollection,
  getAllCollections,
} from "../../modules/CollectionManager";

export const SeedCard = ({ seed, handleDeleteSeed }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={"/public/apple-touch-icon.png"} alt="icon" /> */}
        </picture>
        <h3>
          Name: <span className="card-seedname">{seed.name}</span>
        </h3>
        <p>Latin Name: {seed.latinName}</p>
        <p>Packed For Date: {seed.packedForDate}</p>
        <p>Direct Sow: {seed.directSow}</p>
        <p>Days To Germinate: {seed.daysToGerminate}</p>
        <p>Days To Maturity: {seed.daysToMaturity}</p>
        <p>Seed Spacing: {seed.seedSpacing}</p>
        <p>Temperature: {seed.temperature}</p>
        <p>Light Needs: {seed.lightNeeds}</p>
        <p>Origin: {seed.origin}</p>
        <p>Frost Hardy: {seed.frostHardy}</p>
        <p>Details: {seed.details}</p>

        <button type="button" onClick={() => handleDeleteSeed(seed.id)}>
          Delete
        </button>
        <Link to={`/seeds/${seed.id}/edit`}>
          <button>Edit</button>
        </Link>

        <Link to={`/seeds/${seed.id}`}>
          <button>Details</button>
        </Link>
        {/* <button>SAVE FOR COLLECTION DROPDOWN</button> */}
      </div>
    </div>
  );
};
