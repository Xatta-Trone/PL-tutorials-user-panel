export default function ({ store, redirect, from }) {
  console.log("devicecheck", from);
  // check if loaded
  if (!store.state.device.hasCheckedDevice) {
    localStorage.setItem("intended", window.location.pathname);
    return redirect("/add-device");
  }
}
