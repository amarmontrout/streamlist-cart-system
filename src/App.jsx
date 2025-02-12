import "./App.css";
import Subscriptions from "./pages/subscriptions";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Subscriptions />} />
    </Routes>
  );
}

export default App;
