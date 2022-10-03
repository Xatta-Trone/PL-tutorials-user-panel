export default function ({ store, redirect }) {
  console.log("[middleware] load darkMode");

  if (!store.state.darkmode.isLoadedDarkModeFromLocalStorage) {
    store.commit("darkmode/addLoadedFormLS");
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));

    console.log(darkMode);

    if (darkMode != null) {
      if (darkMode) {
        store.commit("darkmode/setDark");
      } else {
        store.commit("darkmode/setLight");
      }
    }
  }
}
