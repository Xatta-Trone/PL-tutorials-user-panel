import FingerprintJS from "@fingerprintjs/fingerprintjs";

// import "https://cdnjs.cloudflare.com/ajax/libs/swfobject/2.2/swfobject.min.js";
// import "~/assets/js/evercookie.js";
// import "~/assets/js/test.js";

// var ec = new evercookie();

// // set a cookie "id" to "12345"
// // usage: ec.set(key, value)
// ec.set("id", "12345");

// window.ec = ec;

// console.log("ec id", ec.get("id"));

window.fp = fpPromise;

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load();

(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise;
  const result = await fp.get();

  // This is the visitor identifier:
  const visitorId = result.visitorId;
  window.fingerprint = result;
  window.visitorId = visitorId;
  console.log("visitor id", visitorId);
  localStorage.setItem("visitorid", String(visitorId));
  // localStorage.setItem("visitorid", String(visitorId));
})();
