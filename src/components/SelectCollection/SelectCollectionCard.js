import React from "react";
import "../Sown.css";

export const SaveToCollectionCard = ({ collection }) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
          </style>
          <picture>{/* ADD PICTURE/ICON HERE */}</picture>
          <h3>
            <span className="card-collectionname"></span>
          </h3>

          <p>Date Made: {collection.dateMade}</p>
          <button type="button" onClick={() => collection.id}>
            Save To Collection
          </button>
        </div>
      </div>
    </>
  );
};
