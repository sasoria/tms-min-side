import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MinSide from "./mikrofrontend/MinSide";
import MinSideVarslinger from "./mikrofrontend/MinSideVarslinger";
import Arbeidssoker from "./mikrofrontend/Arbeidssoker";
import Utkast from "./mikrofrontend/Utkast";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/minside" exact element={<MinSide />} />
        <Route path="/minside/varslinger" element={<MinSideVarslinger />} />
        <Route path="/minside/arbeidssoker" element={<Arbeidssoker />} />
        <Route path="/minside/utkast" element={<Utkast />} />
      </Routes>
    </Router>
  );
};

export default App;
