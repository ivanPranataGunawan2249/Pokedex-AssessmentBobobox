import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default App;
