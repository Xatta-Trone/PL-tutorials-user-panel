export default async function ({ $axios, store, redirect, route }) {
  console.log("[PLUGIN] Auth (Client)");

  try {
    const token = localStorage.getItem("auth_user");
    console.log(JSON.parse(token));
    // store.commit("auth/setAuth", token);

    // if (!token) {
    //   console.log("redirecting... 1");
    //   return redirect(401, "/auth/login?1");
    // }

    // const user = await $axios.$post("/api/auth/verify", token);
    // console.log("USER", user);

    // if (!user) {
    //   console.log("redirecting... 2");
    //   return redirect(401, "/auth/login?2");
    // }
  } catch (e) {
    return redirect(401, "/login");
  }
}
