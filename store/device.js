export const state = () => ({
  isGuest: false,
  isInSavedDevice: false,
  hasCheckedDevice: false,
  isLoadedFromLocalStorage: false,
});

export const mutations = {
  addGuest(state) {
    state.isGuest = true;
    state.isInSavedDevice = false;
    state.hasCheckedDevice = true;

    localStorage.setItem(
      "deviceCheck",
      JSON.stringify({
        isGuest: true,
        isInSavedDevice: false,
        hasCheckedDevice: true,
      })
    );
  },

  addCurrentDevice(state) {
    state.isGuest = false;
    state.hasCheckedDevice = true;
    state.isInSavedDevice = true;

    localStorage.setItem(
      "deviceCheck",
      JSON.stringify({
        isGuest: false,
        isInSavedDevice: true,
        hasCheckedDevice: true,
      })
    );
  },

  removeCurrentDevice(state) {
    state.isGuest = false;
    state.hasCheckedDevice = false;
    state.isInSavedDevice = false;

    localStorage.setItem(
      "deviceCheck",
      JSON.stringify({
        isGuest: false,
        isInSavedDevice: false,
        hasCheckedDevice: false,
      })
    );
  },

  removeGuestDevice(state) {
    state.isGuest = false;
    state.hasCheckedDevice = false;
    state.isInSavedDevice = false;

    localStorage.setItem(
      "deviceCheck",
      JSON.stringify({
        isGuest: false,
        isInSavedDevice: false,
        hasCheckedDevice: false,
      })
    );
  },

  addFormLocalStorage(state, data) {
    state.isGuest = data.isGuest;
    state.hasCheckedDevice = data.hasCheckedDevice;
    state.isInSavedDevice = data.isInSavedDevice;
    state.isLoadedFromLocalStorage = true;
  },

  addLoadedFormLS(state) {
    state.isLoadedFromLocalStorage = true;
  },
};
