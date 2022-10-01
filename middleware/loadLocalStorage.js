export default function ({ store, redirect }) {
  console.log("load local storage middleware");

  if (!store.state.device.isLoadedFromLocalStorage) {
    let deviceData = localStorage.getItem("deviceCheck");

    if (deviceData != null) {
      let data = JSON.parse(deviceData);

      store.commit("device/addFormLocalStorage", data);
    }
  }
}
