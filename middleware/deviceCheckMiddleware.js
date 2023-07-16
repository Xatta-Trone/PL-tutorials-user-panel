import { ClientJS } from "clientjs";

export default async function ({ store, $axios, $auth }) {
  console.log("[middleware] device check");
  // check if loaded
  // console.log($auth.loggedIn);
  // console.log("window fp", window.fp);

  if ($auth.loggedIn) {
    // check if visitor id exists
    let dId_alt = localStorage.getItem("deviceId_alt");
    let visitorID = null;

    if (dId_alt) {
      // console.log("visitor id form middleware localstorage", dId);
      visitorID = dId_alt;
    } else {
      // add the clientJs Id
      // Create a new ClientJS object
      const client = new ClientJS();

      // Get the client's fingerprint id
      const fingerprint2 = client.getFingerprint();

      // Print the 32bit hash id to the console
      visitorID = fingerprint2;
      localStorage.removeItem("deviceId");
      localStorage.setItem("deviceId_alt", fingerprint2);
    }

    // console.log("visitor ", visitorID);

    $axios.get("user-devices").then((res) => {
      // console.log(res.data);
      if (res.data.devices) {
        var check = res.data.devices.find(
          (device) => device.fingerprint == visitorID
        );
        if (check != null) {
          store.commit("device/addCurrentDevice");
        } else {
          store.commit("device/removeCurrentDevice");
        }
      }
    });
  }
}
