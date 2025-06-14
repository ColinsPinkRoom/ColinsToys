import React from "react";
import { useEffect, useState } from "react";
import "../../style/Home.css"; // Ensure you have a CSS file for styling

function HomePage() {
  return (
    <div id="homeContainer">
      <h2 id="homeTitle">Welcome to Colins Pink Room!</h2>
      <hr className="hr-underline" />
      <p>
        This is a curated list of toys and products that I think Colin would
        enjoy. The list is updated regularly, so check back often for new
        additions. If you have any suggestions or want to add something, feel
        free to let me know!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        officiis aperiam dignissimos obcaecati est ullam, dolor eos explicabo
        maxime quisquam iste, ab magni eaque delectus eveniet repellendus quod
        inventore quae! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ab sapiente nemo ex facilis quisquam non quidem aliquam
        dignissimos repudiandae, tempora eveniet assumenda officiis illum. Eaque
        iure sit quam quibusdam alias! lorem
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime
        commodi doloribus accusantium porro vero voluptate corrupti cumque,
        nostrum, saepe ullam quo velit fugiat mollitia quae numquam soluta dicta
        exercitationem?
      </p>
    </div>
  );
}

export default HomePage;
