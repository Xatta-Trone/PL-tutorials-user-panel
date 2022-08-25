export default async function ({ store, redirect, route }) {
  console.log("[PLUGIN] Auth (Client)");

  try {
    const token = localStorage.getItem("auth_user");
    let data = JSON.parse(token);
    console.log(data, store.$auth.loggedIn);

    // if (store.$auth.loggedIn) {
    //   //try logging in
    //   // store.commit("auth/setAuth", data.access_token);
    //   store.commit("auth/SET", data.user);
    // }

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
