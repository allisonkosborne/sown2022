const remoteURL = "http://localhost:8088";

export const getCollectionById = (collectionId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/collections/${collectionId}`).then((res) =>
    res.json()
  );
};

export const getAllCollections = () => {
  return fetch(`${remoteURL}/collections`).then((res) => res.json());
};

export const getMyCollections = () => {
  const userId = JSON.parse(sessionStorage.getItem("sown_user")).id;
  return fetch(`${remoteURL}/collections?_expand=user&userId=${userId}`).then(
    (res) => res.json()
  );
};

export const deleteCollection = (id) => {
  return fetch(`${remoteURL}/collections/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

// export const addCollection = (newCollection) => {
//   return fetch(`${remoteURL}/collections`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newCollection),
//   }).then((response) => response.json());
// };

export const addCollection = (newCollection) => {
  return fetch(`${remoteURL}/collections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCollection),
  }).then((response) => response.json());
};

export const updateCollection = (editedCollection) => {
  return fetch(`${remoteURL}/collections/${editedCollection.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedCollection),
  }).then((data) => data.json());
};

export const getUserSeedCollections = (sessionUserId) => {
  // const collectionId = JSON.parse(
  //   sessionStorage.getItem("sown_user")
  // ).collectionId;
  return fetch(
    `${remoteURL}/userSeedCollections?_expand=users&_expand=collection?userId=${sessionUserId}`
  ).then((res) => res.json());
};
