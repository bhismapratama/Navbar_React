import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./Homes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;




