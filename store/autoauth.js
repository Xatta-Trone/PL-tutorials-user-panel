export const state = () => ({
  isLoadedFromAutoAuth: false,
});

export const mutations = {
  setAutoAuthLoaded(state) {
    state.isLoadedFromAutoAuth = true;
  },
};
