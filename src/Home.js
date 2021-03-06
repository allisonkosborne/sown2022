import React, { useReducer } from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { PropsAndState } from "./components/PropsAndState";
import "./Home.css";
import { getUserName } from "./modules/SeedManager";
import { useEffect, useState } from "react";
import { GrowingPlants } from "./components/GrowingPlants";

export const Home = () => {
  const [users, setUsers] = useState([]);

  const userNameIntro = () => {
    return getUserName().then((usersFromAPI) => {
      // We'll do something more interesting with this data soon.
      setUsers(usersFromAPI);
    });
  };
  useEffect(() => {
    userNameIntro();
  }, []);

  return (
    <>
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Gloria+Hallelujah&display=swap');
        </style>
        <div className="home-page">
          {/* <img src={"/image1.jpg"} alt="Flowers" /> */}
          <h1 className="welcome">Sown</h1>
          <h1 className="keepers">For the Seed Keepers</h1>
        </div>
        <p>
          <PropsAndState yourName={users.name} />
        </p>

        <html>
          <head>
            <title>Plant Grow</title>
          </head>
          <body>
            <div class="field">
              <div class="tree tree--1">
                <span class="tree_leaf tree_leaf--top-left"></span>
                <span class="tree_leaf tree_leaf--top-right"></span>
                <span class="tree_leaf tree_leaf--right"></span>
                <span class="tree_leaf tree_leaf--left"></span>
              </div>
              <img src="grass.png" class="grass"></img>
            </div>
          </body>
        </html>

        <div className="first-paragraph">
          <small>
            "Seeds are everywhere yet nobody thinks of them, tiny bundles
            waiting to be opened. Most any seed is small enough to hide in a
            locket, and some are so small they get latched between two teeth.
            They are on our forks, between our cracks of sidewalks and
            cobblestones of streets, under trees, on trees, in the produce
            section of the supermarket. They are in the wind, rolling along the
            desert, in our hair, in the fur of animals, in our dogs' feet." -
            Janisse Ray
          </small>
        </div>

        {/* <div className="second-paragraph">
        Now is not the time to be silent. To remain stagnant. Now is the time to
        take our health, the health of our communities back into our sOWN hands.
        Our future, the future of our food, a sustenance that we each partake in
        each and every day is in danger and it is up to us to change that. With
        each seed sown, a future is forseen. A hope is dug. And a life is
        changed.
      </div> */}
      </div>
    </>
  );
};
