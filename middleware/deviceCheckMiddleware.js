import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default async function ({ store, $axios, $auth }) {
  console.log("[middleware] device check");
  // check if loaded
  // console.log($auth.loggedIn);
  // console.log("window fp", window.fp);

  if ($auth.loggedIn) {
    // check if visitor id exists
    let dId = localStorage.getItem("deviceId");
    let visitorID = null;

    if (dId) {
      // console.log("visitor id form middleware localstorage", dId);
      visitorID = dId;
    } else {
      // Initialize an agent at application startup.
      const fpPromise = FingerprintJS.load();

      (async () => {
        // Get the visitor identifier when you need it.
        const fp = await fpPromise;
        const result = await fp.get();

        // This is the visitor identifier:
        const visitorId = result.visitorId;
        visitorID = visitorId;
        // console.log("deviceId from middleware", visitorId);
      })();
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
