import React from "react";
import { Link } from "react-router-dom";

export const SaveToCollectionCard = ({ userSeedCollection, handleSaveSeedToCollection }) => {
  return (
    <div className="card">
      <div className="card-content">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
        </style>
        <picture>{/* ADD PICTURE/ICON HERE */}</picture>
        <h3>
          <span className="card-collectionname">Test</span>
        </h3>
        
        <p>Date Made: </p>

        <button
          type="button"
          onClick={() => handleSaveSeedToCollection(userSeedCollection.id)}
        >
          Save To Collection
        </button>

      </div>
    </div>
  );
};