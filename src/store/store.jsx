import create from "zustand";

export const selectIsError = (state) => state.isError;

const actions = (set) => ({
  setIsError: () =>
    set({
      isError: true,
    }),
});

const useStore = create((set) => ({
  isError: false,
  ...actions(set),
}));

export default useStore;
