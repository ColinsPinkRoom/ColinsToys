import React from "react";
import "../../style/pages/NotFound.css";

function NotFoundPage() {
  return (
    <div className="not-found-container container">
      <h2 className="not-found-title titleText">Error 404</h2>
      <p className="not-found-subtitle">
        The page you’re looking for doesn’t exist~
      </p>
      <p className="not-found-message">
        Maybe try heading back home, sweetie 💖
      </p>
      <a className="not-found-link" href="#/">
        Go back to Home
      </a>
    </div>
  );
}

export default NotFoundPage;
