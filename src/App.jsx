import { useState } from "react";

import ProductPage from "./modules/ProductPage.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <ProductPage />;
}

export default App;
