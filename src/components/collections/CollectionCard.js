import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";

export const CollectionCard = ({ collection, handleDeleteCollection }) => {
  return (
    <div className="card">
      <div className="card-content">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
        </style>
        <picture>{/* ADD PICTURE/ICON HERE */}</picture>
        <h3>
          Name: <span className="card-collectionname">{collection.name}</span>
        </h3>
        <p>User Id: {collection.userId}</p>
        <p>Date Made: {collection.dateMade}</p>
        <p>Details: {collection.details}</p>

        <button
          type="button"
          onClick={() => handleDeleteCollection(collection.id)}
        >
          Delete
        </button>

        <Link to={`/collections/${collection.id}`}>
          <button>Details</button>
        </Link>

        <Link to={`/collections/${collection.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};
