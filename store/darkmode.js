export const state = () => ({
  isLoadedDarkModeFromLocalStorage: false,
  isDark: false,
});

export const mutations = {
  toggleDarkMode(state) {
    if (
      state.isDark ||
      document.querySelector("body").classList.contains("dark-mode")
    ) {
      setLight();
    } else {
      setDark();
    }
  },

  setDark(state) {
    state.isDark = true;
    // state.isLoadedDarkModeFromLocalStorage = true;
    document.querySelector("body").classList.add("dark-mode");
    localStorage.setItem("darkMode", true);
  },

  setLight(state) {
    state.isDark = false;
    // state.isLoadedDarkModeFromLocalStorage = true;
    document.querySelector("body").classList.remove("dark-mode");
    localStorage.setItem("darkMode", false);
  },

  addLoadedFormLS(state) {
    state.isLoadedDarkModeFromLocalStorage = true;
  },
};
