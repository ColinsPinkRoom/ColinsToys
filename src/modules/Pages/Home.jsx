import React from "react";
import { useEffect, useState } from "react";
import "../../style/Home.css"; // Ensure you have a CSS file for styling

function Home() {
  return (
    <div id="homeContainer">
      <h2 id="mainTitle">Toys for Colin</h2>

      <p className="intro-text">
        Welcome to "Toys for Colin"! This is a curated list of toys and products
        that I think Colin would enjoy. The list is updated regularly, so check
        back often for new additions. If you have any suggestions or want to add
        something, feel free to let me know!
      </p>
      <div id="contentContainer"></div>
    </div>
  );
}

export default Home;
