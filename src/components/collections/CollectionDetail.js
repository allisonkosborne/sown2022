import React, { useState, useEffect } from 'react';
import { getCollectionById } from '../../modules/CollectionManager';
import './CollectionDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const CollectionDetail = () => {
  const [collection, setCollection] = useState({ name: "", userId: "", dateMade: "", details: "" });

  const [isLoading, setIsLoading] = useState(true);
  const {collectionId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", collectionId)
    getCollectionById(collectionId)
      .then(collection => {
        setCollection(collection);
        setIsLoading(false);
      });
  }, [collectionId]);

  return (
    <section className="collection">
      <h3 className="collection__name">{collection.name}</h3>
      <div className="collection__userId">{collection.userId}</div>
      <div className="collection__dateMade">{collection.dateMade}</div>
      <div className="collection__details">{collection.details}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
        
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
    </section>
  );
}

