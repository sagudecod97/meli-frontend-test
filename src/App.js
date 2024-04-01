import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import SearchResults from "./pages/search-results/search-results";
import ProductDetail from "./pages/product-detail/product-detail";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<SearchResults />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
