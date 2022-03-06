const remoteURL = "http://localhost:8088"

export const getCollectionById = (collectionId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/collections/${collectionId}`)
  .then(res => res.json())
}

export const getAllCollections = () => {
  return fetch(`${remoteURL}/collections`)
  .then(res => res.json())
}

export const deleteCollection = (id) => {
    return fetch(`${remoteURL}/collections/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }