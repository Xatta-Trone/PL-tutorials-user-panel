export default async function ({ store, redirect, route, $auth, axios }) {
  console.log("[middleware] Auth (Client)");
  // console.log($auth);

  if (!store.state.autoauth.isLoadedFromAutoAuth) {
    const token = localStorage.getItem("auth_user");
    let data = JSON.parse(token);
    // console.log(data, store.$auth.loggedIn);

    if (data != null) {
      // store.state.auth.setUser(data.user);
      store.commit("autoauth/setAutoAuthLoaded");
      // store.commit("auth/SET", { key: "user", value: data.user }); // set state auth
      // store.commit("auth/SET", { key: "loggedIn", value: true }); // set state auth

      // store.state.auth.setUserToken(data.access_token);
      // store.commit("SET_USER_TOKEN", data.access_token); // set state auth
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
