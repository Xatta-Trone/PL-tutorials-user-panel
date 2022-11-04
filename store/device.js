const ttl = 6 * 60 * 60 * 1000; //ms
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

    const now = new Date();

    localStorage.setItem(
      "deviceCheck",
      JSON.stringify({
        isGuest: true,
        isInSavedDevice: false,
        hasCheckedDevice: true,
        expiry: now.getTime() + ttl,
      })
    );
  },

  addCurrentDevice(state) {
    state.isGuest = false;
    state.hasCheckedDevice = true;
    state.isInSavedDevice = true;

    const now = new Date();

    localStorage.setItem(
      "deviceCheck",
      JSON.stringify({
        isGuest: false,
        isInSavedDevice: true,
        hasCheckedDevice: true,
        expiry: 0,
      })
    );
  },

  removeCurrentDevice(state) {
    state.isGuest = false;
    state.hasCheckedDevice = false;
    state.isInSavedDevice = false;

    localStorage.removeItem("deviceCheck");
  },

  removeGuestDevice(state) {
    state.isGuest = false;
    state.hasCheckedDevice = false;
    state.isInSavedDevice = false;
    localStorage.removeItem("deviceCheck");
  },

  addFormLocalStorage(state, data) {
    const now = new Date();
    // check if device is guest and has expired
    console.log(
      `[mutation] checking expiry`,
      data,
      now.getTime() > data.expiry
    );

    if (data.isGuest && now.getTime() > data.expiry) {
      this.commit("device/removeGuestDevice");
    } else {
      state.isGuest = data.isGuest;
      state.hasCheckedDevice = data.hasCheckedDevice;
      state.isInSavedDevice = data.isInSavedDevice;
      state.isLoadedFromLocalStorage = true;
    }
  },

  addLoadedFormLS(state) {
    state.isLoadedFromLocalStorage = true;
  },
};
