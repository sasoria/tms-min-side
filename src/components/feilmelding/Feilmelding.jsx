import React from "react";
import { Alert } from "@navikt/ds-react";
import "./Feilmelding.css";
import useStore, { selectLanguage } from "../../store/store";

const FeilMelding = () => {
  const language = useStore(selectLanguage);

  const tekst = {
    nb: "Vi har for øyeblikket tekniske problemer. Dette kan føre til at du ikke får opp all informasjon. Vennligst prøv igjen senere.",
    en: "We're having technical difficulties. Some information may not be available, please try again later.",
  };

  return (
    <Alert variant="error" className="feilmelding">
      {tekst[language]}
    </Alert>
  );
};

export default FeilMelding;
