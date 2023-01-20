import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Arbeidssoker from "./mikrofrontend/Arbeidssoker";
import MinSide from "./mikrofrontend/MinSide";
import Varsler from "./mikrofrontend/Varsler";
import TidligereVarsler from "./mikrofrontend/TidligereVarsler";
import Utkast from "./mikrofrontend/Utkast";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/minside" exact element={<MinSide />} />
        <Route path="/minside/varslinger" element={<TidligereVarsler />} />
        <Route path="/minside/tidligere-varslinger" element={<TidligereVarsler />} />
        <Route path="/minside/varsler" element={<Varsler />} />
        <Route path="/minside/arbeidssoker" element={<Arbeidssoker />} />
        <Route path="/minside/utkast" element={<Utkast />} />
      </Routes>
    </Router>
  );
};

export default App;
