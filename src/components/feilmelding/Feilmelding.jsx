import React from "react";
import { Alert } from "@navikt/ds-react";
import "./Feilmelding.css";

const FeilMelding = () => {
  const tekst =
    "Vi har for øyeblikket tekniske problemer. Dette kan føre til at du ikke får opp all informasjon. Vennligst prøv igjen senere.";

  return (
    <Alert variant="error" className="feilmelding">
      {tekst}
    </Alert>
  );
};

export default FeilMelding;
