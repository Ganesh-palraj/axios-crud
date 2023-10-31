import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Action from "./Action"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Teachers from "./Teachers";
import Teacheraction from "./Teacheraction"
import Provider from "./Provider";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/action/" element={<Action />} />
            <Route path="/teacheraction/" element={<Teacheraction />} />
            <Route path="/action/:id" element={<Action />} />
            <Route path="/teacheraction/:id" element={<Teacheraction />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
