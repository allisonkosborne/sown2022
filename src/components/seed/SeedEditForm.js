import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSeedById, updateSeed, addSeed } from "../../modules/SeedManager";
import "./SeedForm.css";
import { getAllCollections } from "../../modules/CollectionManager";

export const SeedEditForm = () => {
  const [seed, setSeed] = useState({
    id: 0,
    name: "",
    latinName: "",
    packedForDate: "",
    directSow: "",
    daysToGerminate: 0,
    daysToMaturity: 0,
    seedSpacing: "",
    temperature: "s",
    lightNeeds: "",
    origin: "",
    frostHardy: "",
    details: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { seedId } = useParams();
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...seed };
    stateToChange[evt.target.id] = evt.target.value;
    setSeed(stateToChange);
  };

  const updateExistingSeed = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const collectionId = seed.collectionId;

    if (collectionId === 0) {
      window.alert("Please select a collection");
    } else {
      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      addSeed(seed).then(() => navigate("/seeds"));
    }

    // This is an edit, so we need the id
    const editedSeed = {
      id: seedId,
      name: seed.name,
      packedForDate: seed.packedForDate,
      directSow: seed.directSow,
      daysToGerminate: seed.daysToGerminate,
      daysToMaturity: seed.daysToMaturity,
      seedSpacing: seed.seedSpacing,
      temperature: seed.temperature,
      lightNeeds: seed.lightNeeds,
      origin: seed.origin,
      frostHardy: seed.frostHardy,
      details: seed.details,
    };

    updateSeed(editedSeed).then(() => navigate("/seeds"));
  };

  useEffect(() => {
    getSeedById(seedId).then((seed) => {
      setSeed(seed);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    //load location data and setState
    getAllCollections().then(setCollections);
  }, []);

  return (
    <>
      <form>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
        </style>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Seed name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={seed.name}
            />

            <label htmlFor="packedForDate">Packed for Date</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="packedForDate"
              value={seed.packedForDate}
            />

            <label htmlFor="directSow">Direct Sow</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="directSow"
              value={seed.directSow}
            />

            <label htmlFor="daysToGerminate">Days To Germinate</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="daysToGerminate"
              value={seed.daysToGerminate}
            />

            <label htmlFor="daysToMaturity">Days To Maturity</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="daysToMaturity"
              value={seed.daysToMaturity}
            />

            <label htmlFor="seedSpacing">Seed Spacing</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="seedSpacing"
              value={seed.seedSpacing}
            />

            <label htmlFor="temperature">Temperature</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="temperature"
              value={seed.temperature}
            />

            <label htmlFor="lightNeeds">Light Needs</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="lightNeeds"
              value={seed.lightNeeds}
            />

            <label htmlFor="origin">Origin</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="origin"
              value={seed.origin}
            />

            <label htmlFor="frostHardy">Frost Hardy</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="frostHardy"
              value={seed.frostHardy}
            />

            <label htmlFor="details">Details</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="details"
              value={seed.details}
            />
          </div>
          {/* <label htmlFor="collection">Assign to Collection: </label>
          <select
            value={seed.collectionId}
            name="collectionId"
            id="collectionId"
            onChange={handleFieldChange}
            className="form-control"
          >
            <option value="0">Your Collections</option>
            {collections.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select> */}

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingSeed}
              className="btn btn-primary"
            >
              SOW
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

// Component loads - Save button should be disabled since the data is not available yet.
// The function passed to useEffect() calls API to get the animal based on the animalId in the URL.
// Data loads and setAnimal() is invoked with new data (also set isLoading to false)
// The component is rendered to the DOM, displaying animal details and ready for edits.
// Make changes. As changes are made, state is updated.
// Select save.
// The updateExistingAnimal method will call setIsLoading(true) - this ensures the user cannot repeatedly click button while API is being updated.
// Invoke AnimalManger.update() to change the API data.
// Once the API has updated, change the view to display all the animals.
