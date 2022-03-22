import React, { useState, useEffect } from 'react';
//import the components we will need
//State is the current values of the properties used to render a component.
import { getAllCollections, deleteCollection } from '../../modules/CollectionManager.js';
import { useNavigate } from 'react-router';
import { getSeedById } from '../../modules/SeedManager.js';
import { SaveToCollectionCard } from './SelectCollectionCard.js';


export const SelectCollectionList = () => {
     // The initial state is an empty array
    const [seedCollection, setSeedCollections] = useState([]);

    const navigate = useNavigate();


    const getSeedCollections = () => {
        //After the data comes back from the API, we
        //  use the setAnimals function to update state
        return getAllCollections().then(collectionsFromAPI => {
          // We'll do something more interesting with this data soon.
          setCollections(collectionsFromAPI); //returning the data from the database
        });
      };
    // got the animals from the API on the component's first render
      useEffect(() => {
        getSeedCollections();
      }, []);
    //useEffect tells React to call the getAnimals() function that will fetch data from our API
    //The empoty array argument tells React ot call the function on the first render of the component
    
    const handleSaveSeedToCollection = id => {
      deleteCollection(id)
      .then(() => getAllCollections().then(setCollections));
    };


    //Finally we use .map() to "loop over" the animals array to show a list of animal cards
    return (
      < >
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {navigate("/seeds/${seed.id}/selectCollection")}}>
          Add Seed to Collection
        </button>
      </section>

      <div className="container-cards">
        {collections.map(collection => 
        <SaveToCollectionCard 
          key={collections.id} 
          collection={collection} //prop
          handleSaveSeedToCollection={handleSaveSeedTOCollection} /> //prop
        )}
    
      </div>
      </ >
    );
  };