const remoteURL = "http://localhost:8088";

export const getSeedById = (seedId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/seeds/${seedId}`).then((res) => res.json());
};

export const getAllSeeds = () => {
  return fetch(`${remoteURL}/seeds`).then((res) => res.json());
};

export const deleteSeed = (id) => {
  return fetch(`${remoteURL}/seeds/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

// export const  = (newSeed) => {
//   return fetch(`${remoteURL}/seeds`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newSeed),
//   }).then((response) => response.json());
// };

export const addSeed = (newSeed) => {
  return fetch(`${remoteURL}/seeds`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSeed),
  }).then((response) => response.json());
};

export const updateSeed = (editedSeed) => {
  return fetch(`${remoteURL}/seeds/${editedSeed.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedSeed),
  }).then((data) => data.json());
};

export const addSeedToCollection = (seedToCollection) => {
  return fetch(`${remoteURL}/userSeedCollections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(seedToCollection),
  }).then((response) => response.json());
};

export const getUserName = () => {
  return fetch(`${remoteURL}/users`).then((res) => res.json());
};

export const getCollectionsForSeedCard = (sessionUserId, seedId) => {
  return fetch(
    `${remoteURL}/userSeedCollections?_expand=users&_expand=collection&usersId=${sessionUserId}&seedId=${seedId}`
  ).then((res) => res.json());
};

export const getSeedsForCollectionDetail = (sessionUserId) => {
  return fetch(
    `${remoteURL}/userSeedCollections?_expand=users&_expand=collection&usersId=${sessionUserId}&_expand=seed`
  ).then((res) => res.json());
};
