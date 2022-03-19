import React, { useEffect, useState } from "react";
import { CollectionCard } from "./CollectionCard";
import {
  getMyCollections,
  deleteCollection,
} from "../../modules/CollectionManager";
import { useNavigate } from "react-router";

export const CollectionList = () => {
  // The initial state is an empty array
  const [collections, setCollections] = useState([]);

  const navigate = useNavigate();

  const getCollections = () => {
    return getMyCollections().then((collectionsfromAPI) => {
      setCollections(collectionsfromAPI);
    });
  };

  useEffect(() => {
    getCollections();
  }, []);

  const handleDeleteCollection = (id) => {
    deleteCollection(id).then(() => getMyCollections().then(setCollections));
  };

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            navigate("/collections/create");
          }}
        >
          Add Collection
        </button>
      </section>

      <div className="container-cards">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            handleDeleteCollection={handleDeleteCollection}
          />
        ))}
      </div>
    </>
  );
};
