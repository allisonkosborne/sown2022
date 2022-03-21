import { useState, useEffect } from "react"
import { getAllCollections, getCollectionById, updateCollection } from "../../modules/CollectionManager"
import React from 'react';
import { SelectCollectionCard } from "./SelectCollectionCard"
// import { addSeedToCollection } from "../../modules/SeedManager"




export const SelectCollectionForm = () => {

    const [collections, setCollections] = useState([]);

    const getCollections = () => {
        return getAllCollections().then(collectionsFromAPI => {
            console.log(collectionsFromAPI)
        })
    }

    useEffect(() => {
        getCollections();
    }, []);

    const handleSelectCollection = id => {
        addSeedtoCollection(id)
        .then(() => getAllCollections().then(setCollections));
    };

    return (
        <div className="selectCollectionform">
           
           {collections.map(collection =>
        <SelectCollectionCard 
            key={collection.id} 
            collection={collection} 
            handleSelectCollection={handleSelectCollection}
            />
      )}


        </div>
    

    );  
};

