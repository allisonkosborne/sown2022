import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCollectionById,
  updateCollection,
} from "../../modules/CollectionManager";
import "./CollectionForm.css";

export const CollectionEditForm = () => {
  const [collection, setCollection] = useState({
    name: "",
    userId: 0,
    dateMade: "",
    details: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { collectionId } = useParams();
  const navigate = useNavigate();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...collection };
    stateToChange[evt.target.id] = evt.target.value;
    setCollection(stateToChange);
  };

  const updateExistingCollection = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedCollection = {
      id: collectionId,
      name: collection.name,
      userId: collection.userId,
      dateMade: collection.dateMade,
      details: collection.details,
    };

    updateCollection(editedCollection).then(() => navigate("/collections"));
  };

  useEffect(() => {
    getCollectionById(collectionId).then((collection) => {
      setCollection(collection);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={collection.name}
            />
            <label htmlFor="name">Collection name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="userId"
              value={collection.userId}
            />
            <label htmlFor="userId">User ID</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="dateMade"
              value={collection.dateMade}
            />
            <label htmlFor="dateMade">Date Made</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="details"
              value={collection.details}
            />
            <label htmlFor="details">Details</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingCollection}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
