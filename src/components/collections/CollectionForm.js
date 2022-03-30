import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //For the Save Animal Button
import { addCollection } from "../../modules/CollectionManager"; //Passed to the API that says animal & the Save Animal button
import "./CollectionForm.css";
import { getAllSeeds, getUserName } from "../../modules/SeedManager";
import { getUserSeedCollections } from "../../modules/CollectionManager";
// import { getAllLocations } from '../../modules/LocationManager';
// import { getAllCustomers } from '../../modules/CustomerManager';

export const CollectionForm = () => {
  // State will contain both animal data as well as an isLoading flag.
  // Define the initial state of the form inputs with useState()
  const sessionUser = JSON.parse(window.sessionStorage.getItem("sown_user"));
  const sessionUserId = sessionUser.id;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserName(sessionUserId).then(setUsers);
  }, []);

  const [collection, setCollection] = useState({
    name: "",
    userId: sessionUserId,
    dateMade: "",
    details: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [seeds, setSeeds] = useState([]);

  const navigate = useNavigate();

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
    const newCollection = { ...collection };
    let selectedVal = event.target.value;
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    newCollection[event.target.id] = selectedVal;
    setCollection(newCollection);
  };

  useEffect(() => {
    getAllSeeds().then(setSeeds);
  }, []);

  const handleClickSaveCollection = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const seedId = seeds.collectionId;

    if (seedId === 0) {
      window.alert("Please select a seed");
    } else {
      //invoke addCollection passing collection as an argument.
      //once complete, change the url and display the collection list
      addCollection(collection).then(() => navigate("/collections"));
    }
  };

  return (
    <form className="collectionForm">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
      </style>
      <h2 className="collectionForm__title">New Collection</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Collection name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Collection name"
            value={collection.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="dateMade">Date made:</label>
          <input
            type="text"
            id="dateMade"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Date made"
            value={collection.dateMade}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="details">Details:</label>
          <input
            type="text"
            id="details"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Details"
            value={collection.details}
          />
        </div>
      </fieldset>
      {/* <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset> */}
      <div className="container">
        <button
          type="button"
          id="mybutton"
          className="btn btn-primary"
          onClick={handleClickSaveCollection}
        >
          SOW
        </button>
      </div>
    </form>
  );
};
