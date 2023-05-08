import { atom } from 'nanostores'
import { Locale } from "../hooks/useLanguage";

export const isErrorAtom = atom<boolean>(false);
export const languageAtom = atom<Locale>("nb");

export function setIsError() {
  isErrorAtom.set(true);
}

export function setLanguage(locale: Locale) {
  languageAtom.set(locale);
}
