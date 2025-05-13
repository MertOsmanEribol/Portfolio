import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // HashRouter kullanıyoruz
import Portfoliopage from "./Portfoliopage";

function App() {
  return (
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Portfoliopage />} />
      </Routes>
    </Router>
  );
}

export default App;