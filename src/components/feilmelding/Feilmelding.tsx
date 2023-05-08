import React from "react";
import { Alert } from "@navikt/ds-react";
import { useStore } from "@nanostores/react";
import { text } from "../../language/text";
import styles from "./Feilmelding.module.css";
import { languageAtom } from "../../store/store";

const FeilMelding = () => {
  const language = useStore(languageAtom);

  return (
    <Alert variant="error" className={styles["feilmelding"]}>
      {text.feilmelding[language]}
    </Alert>
  );
};

export default FeilMelding;
