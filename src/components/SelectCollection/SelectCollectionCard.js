import React from "react";
import { SelectCollectionForm } from "./SelectCollection";


export const SelectCollectionCard = ({ collection, handleSelectCollection }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={'/images/dog.svg'} alt="My Dog" /> */}
          </picture>
     
          <h3>
          <span className="card-collectionname">{collection.name}</span>
          <button type="button" onClick={() => handleSelectCollection(collection.id)}>
              Pick a Collection!</button>

        </h3>
        {/* <p>Date Made: {collection.dateMade}</p>
        <p>Details: {collection.details}</p> */}

        </div>
      </div>
    );
  }