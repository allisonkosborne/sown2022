import React, { useState, useEffect } from "react";
//import the components we will need
//State is the current values of the properties used to render a component.
import {
  getAllCollections,
  getUserSeedCollections,
} from "../../modules/CollectionManager.js";
import { useNavigate } from "react-router";
import { SaveToCollectionCard } from "./SelectCollectionCard.js";

export const SelectCollectionList = () => {
  // The initial state is an empty array
  const [userSeedCollection, setUserSeedCollections] = useState([]);
  const sessionUser = JSON.parse(window.sessionStorage.getItem("sown_user"));
  const sessionUserId = sessionUser.id;

  const navigate = useNavigate();

  const getSeedCollections = () => {
    //After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getUserSeedCollections(sessionUserId).then((collections) => {
      // We'll do something more interesting with this data soon.
      setUserSeedCollections(collections); //returning the data from the database
    });
  };
  // got the animals from the API on the component's first render
  useEffect(() => {
    getSeedCollections();
  }, []);

  useEffect(() => {
    console.log(userSeedCollection);
  }, [userSeedCollection]);
  //useEffect tells React to call the getAnimals() function that will fetch data from our API
  //The empoty array argument tells React ot call the function on the first render of the component

  const handleSaveSeedToCollection = (id) => {
    // getSeedCollections(id)
    // .then(() => getUserSeedCollections().then(setCollections));
    return "";
  };

  //Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      {/* <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {navigate("/seeds/${seed.id}/selectCollection")}}>
          Add Seed to Collection
        </button>
      </section> */}

      <div className="container-cards">
        {userSeedCollection.map(
          (collection) => (
            <SaveToCollectionCard
              key={collection}
              collection={userSeedCollection} //prop
              // handleSaveSeedToCollection={handleSaveSeedToCollection}
            />
          ) //prop
        )}
      </div>
    </>
  );
};
