import useStore from "./store";

const withStore = (Store) => (props) => {
  const store = useStore();
  return <Store {...props} store={store} />;
};

export default withStore;
