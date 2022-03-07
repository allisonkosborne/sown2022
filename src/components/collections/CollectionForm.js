import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; //For the Save Animal Button 
import { addCollection } from '../../modules/CollectionManager'; //Passed to the API that says animal & the Save Animal button
import './CollectionForm.css'
// import { getAllLocations } from '../../modules/LocationManager';
// import { getAllCustomers } from '../../modules/CustomerManager';

export const CollectionForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [collection, setCollection] = useState({
		name: "",
		userId: 0,
        dateMade: "",
        details: ""
		// locationId: 0,
		// customerId: 0
	});
//defining properties in the object; initialize values 


	const [isLoading, setIsLoading] = useState(false);
    //if true, it wont allow you to use the form; 

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	// const [locations, setLocations] = useState([]); 
	// const [customers, setCustomers] = useState([]); //both set to empty arrays - any value it gets set to will be an array

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newCollection = { ...collection }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newCollection[event.target.id] = selectedVal
		// update state
		setCollection(newCollection)
        //kinda like a listener 
	}

    useEffect(() => {
		//load location data and setState
        // getAllLocations().then(setLocations)
    }, []);
    //just run one time with []

     useEffect(() => {
		//load customer data and setState
        // getAllCustomers().then(setCustomers)
	}, []);


	const handleClickSaveCollection = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = animal.locationId
		const customerId = animal.customerId

		if (locationId === 0 || customerId === 0) {
			window.alert("Please select a location and a customer")
		} else {
			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
			addCollection(collection)
				.then(() => navigate("/collections"))
		}
	}

	return (
		<form className="collectionForm">
			<h2 className="collectionForm__title">New Collection</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Collection name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Collection name" value={collection.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="dateMade">Date made:</label>
					<input type="text" id="dateMade" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date made" value={collection.dateMade} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="details">Details:</label>
					<input type="text" id="details" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Details" value={collection.details} />
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
			<button className="btn btn-primary"
				onClick={handleClickSaveCollection}>
				Save Collection
          </button>
		</form>
	)
};
