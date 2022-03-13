import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addSeed } from "../../modules/SeedManager";
import "./SeedForm.css";
import { getAllCollections } from "../../modules/CollectionManager";

export const SeedForm = () => {
  // State will contain both animal data as well as an isLoading flag.
  // Define the initial state of the form inputs with useState()

  const [seed, setSeed] = useState({
    id: 0,
    name: "",
    latinName: "",
    packedForDate: "",
    directSow: "",
    daysToGerminate: 0,
    daysToMaturity: 0,
    seedSpacing: "",
    temperature: "",
    lightNeeds: "",
    origin: "",
    frostHardy: "",
    details: "",
    // locationId: 0
  });

  const [isLoading, setIsLoading] = useState(false);

  // you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section

  const [collections, setCollections] = useState([]);
  // const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  //when a field changes, update state. The return will re-render and display based on the values in state
  // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
  //Controlled component

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
    const newSeed = { ...seed };
    let selectedVal = event.target.value;
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    /* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
    newSeed[event.target.id] = selectedVal;
    // update state
    setSeed(newSeed);
  };

  useEffect(() => {
    //load location data and setState
    getAllCollections().then(setCollections);
  }, []);

  useEffect(() => {
    //load customer data and setState
  }, []);

  const handleClickSaveSeed = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const collectionId = seed.collectionId;

    if (collectionId === 0) {
      window.alert("Please select a collection");
    } else {
      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      addSeed(seed).then(() => navigate("/seeds"));
    }
  };

  return (
    <form className="seedForm">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
      </style>
      <h2 className="seedForm__title">New Seed</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Seed name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Seed name"
            value={seed.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="latinName">Latin name:</label>
          <input
            type="text"
            id="latin-name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Latin name"
            value={seed.latinName}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="packedForDate">Packed for date:</label>
          <input
            type="text"
            id="packed-for-date"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Packed for date"
            value={seed.packedForDate}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="directSow">Direct sow:</label>
          <input
            type="text"
            id="direct-sow"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Direct sow"
            value={seed.directSow}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="daysToGerminate">Days to germinate:</label>
          <input
            type="text"
            id="days-to-germinate"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Days to germinate"
            value={seed.daysToGerminate}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="daysToMaturity">Days to maturity:</label>
          <input
            type="text"
            id="days-to-maturity"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Days to maturity"
            value={seed.daysToMaturity}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="seedSpacing">Seed spacing:</label>
          <input
            type="text"
            id="seed-spacing"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Seed spacing"
            value={seed.seedSpacing}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="temperature">Temperature:</label>
          <input
            type="text"
            id="temperature"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Temperature"
            value={seed.temperature}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="lightNeeds">Light needs:</label>
          <input
            type="text"
            id="light-needs"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Light needs"
            value={seed.lightNeeds}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Origin"
            value={seed.origin}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="frostHardy">Frost hardy:</label>
          <input
            type="text"
            id="frost-hardy"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Frost hardy"
            value={seed.frostHardy}
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
            value={seed.details}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="collection">Assign to Collection: </label>
          <select
            value={seed.collectionId}
            name="collectionId"
            id="collectionId"
            onChange={handleControlledInputChange}
            className="form-control"
          >
            <option value="0">Select a Collection</option>
            {collections.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      {/* <fieldset>
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
      <button className="btn btn-primary" onClick={handleClickSaveSeed}>
        Save Seed
      </button>
    </form>
  );
};
