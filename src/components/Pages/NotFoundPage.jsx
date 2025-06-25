import React from "react";
import "../../style/NotFound.css";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h2>404 - The page does not exist</h2>
      <p>Oopsie! The page you’re looking for doesn’t exist..</p>
      <p>Come back to the homepage, sweetie~ </p>
      <a href="#/">Go back to home</a>
    </div>
  );
}

export default NotFoundPage;
