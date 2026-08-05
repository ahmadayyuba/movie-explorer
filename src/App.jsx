import { BrowserRouter as Router } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

export function App() {
  return (
    <Router>
      <DetailPage />
    </Router>
  );
}

export default App;