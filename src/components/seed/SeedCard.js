import React, { useState, useEffect } from "react";
import "./Seed.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import {
//   addCollection,
//   getAllCollections,
// } from "../../modules/CollectionManager";
import {
  getMyCollections,
  updateCollection,
} from "../../modules/CollectionManager";
import { addSeedToCollection } from "../../modules/SeedManager";
import { getCollectionsForSeedCard } from "../../modules/SeedManager";

export const SeedCard = ({ seed, handleDeleteSeed }) => {
  const sessionUser = JSON.parse(window.sessionStorage.getItem("sown_user"));
  const sessionUserId = sessionUser.id;
  const navigate = useNavigate();

  const [collections, setCollections] = useState([]);
  const [seedCollections, setSeedCollections] = useState([]);

  useEffect(() => {
    getMyCollections(sessionUserId).then(setCollections);
    getCollectionsForSeedCard(sessionUserId, seed.id).then(
      (seedCollections) => {
        setSeedCollections(seedCollections);
      }
    );
  }, []);

  //seed.id because prop

  const handleDropdownChange = (evt) => {
    // const stateToChange = { ...collections };
    // stateToChange[evt.target.id] = evt.target.value;
    // setCollections(stateToChange);
    const collectionId = evt.target.value;
    const seedId = seed.id;

    const newSeedToCollection = {
      usersId: sessionUserId,
      collectionId: collectionId,
      seedId: seedId,
    };
    addSeedToCollection(newSeedToCollection);
  };

  return (
    <div className="card">
      <div className="card-content">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
        </style>
        <picture>
          {/* <img src={"/public/apple-touch-icon.png"} alt="icon" /> */}
        </picture>
        <h3>
          <span className="card-seedname">{seed.name}</span>
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

        <label htmlFor="collectionId" className="collection_dropdown">
          {/* Collections */}
        </label>
        <select
          className="collection_dropdown"
          id="collectionId"
          onChange={handleDropdownChange}
          value={collections.id}
          name="collectionId"
          required
        >
          <option value="0" className="add_to_collection">
            Add to Collection
          </option>
          {collections.map((collection) => (
            <option key={collection.id} value={collection.id}>
              {collection.name}
            </option>
            //Creates dropdown for user's collections
          ))}
        </select>
        <div className="collection_names">
          <h3 className="collection_title">Collections:</h3>
          <p>
            {seedCollections.map(
              (seedCollection) => seedCollection.collection.name
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
