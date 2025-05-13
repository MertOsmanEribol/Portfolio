import "./App.css";
import Portfoliopage from "./Portfoliopage";

function App() {
  return (
    <Router>
      <Route basename="/Portfolio" path="/" element={<Portfoliopage />} />
    </Router>
  );
}

export default App;
