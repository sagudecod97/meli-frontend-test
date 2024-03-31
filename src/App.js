import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
