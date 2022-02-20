<template>
  <div>
    <CustomHeader
      :title="'#' + $auth.user.student_id"
      :subtitle="$auth.user.name"
    />

    <b-container>
      <b-row>
        <b-col sm="12">
          <div class="my-3">
            <b-tabs content-class="mt-3" justified pills>
              <b-tab title="Info" active>
                <b-list-group>
                  <b-list-group-item
                    ><b>Name:</b> {{ $auth.user.name }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Student ID:</b> #{{
                      $auth.user.student_id
                    }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>E-mail:</b> {{ $auth.user.email }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>User Letter:</b>
                    {{ $auth.user.user_letter }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Joined on:</b>
                    {{
                      new Date($auth.user.created_at).toDateString()
                    }}</b-list-group-item
                  >
                </b-list-group>
              </b-tab>
              <b-tab title="Change password">
                <change-password />
              </b-tab>
              <b-tab title="Activity"
                ><p>I'm the tab with the very, very long title</p></b-tab
              >
              <b-tab title="Android app">
                <div class="text-center my-3">

                  <p>Scan to install or click the link below.</p>
                   <qrcode-vue :value="appUrl" size="150" level="H" />
                  <a :href="appUrl" target="_blank"
                    ><img src="~/assets/img/googleplay.png" height="110"
                  /></a>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import ChangePassword from "../../components/user/ChangePassword.vue";
export default {
  layout: "content",
  middleware: "auth",
  components: { QrcodeVue, ChangePassword },
  data() {
    return {
      appUrl:
        "https://play.google.com/store/apps/details?id=com.studytheatre.app",
    };
  },
};
</script>
