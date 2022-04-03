import React from "react";

export const GrowingPlants = () => {
  return (
    <>
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
    </>
  );
};
