import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
