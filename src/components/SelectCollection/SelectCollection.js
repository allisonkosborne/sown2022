import { useState, useEffect } from "react"
import { getAllCollections, getCollectionById, updateCollection } from "../../modules/CollectionManager"
import React from 'react';
import { SelectCollectionCard } from "./SelectCollectionCard"
import { useNavigate } from "react-router";
import { addSeedToCollection } from "../../modules/SeedManager";

export const SeedCollection = () => {
}







// export const SelectCollectionForm = () => {

//     const [seedCollection, setSeedCollections] = useState({
//         name: "",
//     });
    
//     const [isLoading, setIsLoading] = useState(false);
    
//     const [collections, setCollections] = useState([]);
    
//     const navigate = useNavigate();

//     const handleControlledInputChange = (event) => {

//         const selectSeedCollection = { ...seedCollection }

//         let selectedVal = event.target.value

//         if (event.target.isLoading.includes("Id")) {
//                 selectedVal = parseInt(selectedVal)
//         }
//         selectSeedCollection[event.target.id] = selectedVal

//         setSeedCollections(selectSeedCollection)

//     }

//     useEffect(() => {
//             getAllCollections().then(setCollections)
//     }, []);

//     useEffect(() => {

//     }, []);

//     const handleClickSaveSeedtoCollection = (event) => {
// 		event.preventDefault() //Prevents the browser from submitting the form

// 		const collectionId = seedCollection.collectionId
		

// 		if (collectionId === 0) {
// 			window.alert("Please select a Collection")
// 		} else {
// 			//invoke addAnimal passing animal as an argument.
// 			//once complete, change the url and display the animal list
// 			addSeedToCollection(seedCollection)
// 				.then(() => navigate("/seeds"))
// 		}
// 	}

//     return (
// <>
//         <fieldset>
//         <div className="form-group">
//             <label htmlFor="seedCollection">Assign to Collection: </label>
//             <select value={seedCollection.collectionId} name="collectionId" id="collectionId" onChange={handleControlledInputChange} className="form-control" >
//                 <option value="0">Select a Collection</option>
//                 {collections.map(l => (
//                     <option key={l.id} value={l.id}>
//                         {l.name}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     </fieldset>
//     <button className="btn btn-primary"
//         onClick={handleClickSaveSeedtoCollection}>
//         Save Seed To Collection
//         </button>
        
//         </>
//     )
// };

