import { useEffect, useState } from "react";
import "../../style/pages/Updates.css";

function UpdatesPage() {
  const [updates, setUpdates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://notion-api.splitbee.io/v1/table/2321cfac6ef080f79d89d596cac44d27"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.Title || "Untitled",
          date: item.Date || new Date().toISOString(),
          content: item.Content || "",
        }));

        // Sort by most recent
        const sorted = formatted.sort((a, b) => {
          const dateDiff = new Date(b.date) - new Date(a.date);
          if (dateDiff !== 0) return dateDiff;
          return b.id.localeCompare(a.id); // fallback sort by ID
        });
        setUpdates(sorted);
      })

      .catch((err) => {
        console.error("❌ Failed to load updates data:", err);
        setError("⚠️ Oops! Could not load updates. Try refreshing the page.");
      });
  }, []);

  if (error) {
    return (
      <div className="update-container container">
        <div style={{ color: "red" }}>{error}</div>
      </div>
    );
  }

  if (!updates) {
    return (
      <div className="update-container container">
        <div className="image-loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  console.log(updates[0]);

  return (
    <div className="update-container container">
      <h2 className="titleText">Updates</h2>
      {updates.length > 0 ? (
        updates.map((update, index) => (
          <div key={index} className="update-item">
            <h3>{update.title}</h3>
            <h5>
              {new Date(update.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h5>
            <p>{update.content}</p>
          </div>
        ))
      ) : (
        <div className="update-item">
          <h3>No updates available</h3>
          <p>Check back later for news!</p>
        </div>
      )}
    </div>
  );
}

export default UpdatesPage;
