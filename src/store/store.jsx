import create from "zustand";

export const selectIsError = (state) => state.isError;
export const selectLanguage = (state) => state.language;
export const selectSetLanguage = (state) => state.setLanguage;

const actions = (set) => ({
  setLanguage: (locale) =>
    set({
      language: locale,
    }),
  setIsError: () =>
    set({
      isError: true,
    }),
});

const useStore = create((set) => ({
  language: "nb",
  isError: false,
  ...actions(set),
}));

export default useStore;
