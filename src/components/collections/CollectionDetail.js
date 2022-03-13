import React, { useState, useEffect } from "react";
import {
  getCollectionById,
  deleteCollection,
} from "../../modules/CollectionManager";
import "./CollectionDetail.css";
import { useParams, useNavigate } from "react-router-dom";

export const CollectionDetail = () => {
  const [collection, setCollection] = useState({
    name: "",
    userId: "",
    dateMade: "",
    details: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const { collectionId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteCollection(collectionId).then(() => navigate("/collections"));
  };

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", collectionId);
    getCollectionById(collectionId).then((collection) => {
      setCollection(collection);
      setIsLoading(false);
    });
  }, [collectionId]);

  return (
    <section className="collection">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
      </style>
      <h3 className="collection__name">Collection Name: {collection.name}</h3>
      <div className="collection__userId">User ID: {collection.userId}</div>
      <div className="collection__dateMade">
        Date Made: {collection.dateMade}
      </div>
      <div className="collection__details">Details: {collection.details}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}

      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Delete
      </button>
    </section>
  );
};
