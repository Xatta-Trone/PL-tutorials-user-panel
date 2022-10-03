export default async function ({ $axios, store, redirect, route, $auth }) {
  console.log("[PLUGIN] Auth (Client)");

  if (!store.state.autoauth.isLoadedFromAutoAuth) {
    const token = localStorage.getItem("auth_user");
    let data = JSON.parse(token);

    if (data != null) {
      // store.state.auth.setUser(data.user);
      // store.state.auth.setUserToken(data.access_token);
      // store.commit("autoauth/setAutoAuthLoaded");
      // store.commit("SET_AUTH", data.user); // set state auth
      // store.commit("SET_USER_TOKEN", data.access_token); // set state auth
      // $auth.setUser(data.user);
    }

    // if (store.$auth.loggedIn) {
    //   //try logging in
    //   // store.commit("auth/setAuth", data.access_token);
    //   store.commit("auth/SET", data.user);
    // }

    // store.$auth.setToken("local", token);
    // store.$auth.strategy._setToken(token);

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
  }
}
