import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Arbeidssoker from "./mikrofrontend/Arbeidssoker";
import MinSide from "./mikrofrontend/MinSide";
import Varsler from "./mikrofrontend/Varsler";
import TidligereVarsler from "./mikrofrontend/TidligereVarsler";
import Utkast from "./mikrofrontend/Utkast";
import useStore, { selectLanguage } from "./store/store";
import { useLanguage } from "./hooks/useLanguage";

const App = () => {
  useLanguage();
  const BASEPATH = "/minside";
  const basePathWithLocales = [`${BASEPATH}`, `${BASEPATH}/en`, `${BASEPATH}/nn`];

  return (
    <Router>
      <Routes>
        {basePathWithLocales.map((basePath) => {
          <>
            <Route path={basePath} exact element={<MinSide />} />
            <Route path={`${basePath}/varslinger`} element={<TidligereVarsler />} />
            <Route path={`${basePath}/tidligere-varsler`} element={<TidligereVarsler />} />
            <Route path={`${basePath}/varsler`} element={<Varsler />} />
            <Route path={`${basePath}/arbeidssoker`} element={<Arbeidssoker />} />
            <Route path={`${basePath}/utkast`} element={<Utkast />} />
          </>;
        })}
      </Routes>
    </Router>
  );
};

export default App;
