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
                <b-row>
                  <b-col sm="6">
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
                        ><b>E-mail:</b>
                        {{ $auth.user.email }}</b-list-group-item
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
                    </b-list-group></b-col
                  >
                  <b-col sm="6">
                    <div class="text-center my-3">
                      <p>
                        Scan to install or click the link below to install our
                        Android app.
                      </p>
                      <qrcode-vue :value="appUrl" size="150" level="H" />
                      <a :href="appUrl" target="_blank"
                        ><img src="~/assets/img/googleplay.png" height="110"
                      /></a>
                    </div>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Change password">
                <change-password />
              </b-tab>
              <b-tab title="Activity"
                ><p>I'm the tab with the very, very long title</p>

                <v-server-table
                  url="user-activity"
                  :columns="columns"
                  :options="options"
                >
                  <div
                    slot="created_at"
                    slot-scope="{ row }"
                    class="d-flex justify-content-around"
                  >
                    {{ new Date(row.created_at).toDateString() }}
                  </div>

                  <div slot="label" slot-scope="{ row }">
                    <div v-if="row.activity == 'searched'">{{ getSearchString(row.label) }}</div>
                    <div v-if="row.activity != 'searched'">{{ row.label }}</div>
                  </div>
                </v-server-table>
              </b-tab>
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
      columns: ["id", "activity", "label", "created_at"],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          id: "Sl. No.",
          created_at:'Date',
          activity:'Activity type',
          label:'Activity'
        },
        requestFunction(data) {
          let vm = this;
          return this.$axios
            .get(this.url, {
              params: data,
            })
            .catch(function (e) {
              // this.dispatch('error', e)
              console.log("Err in datatble", e);
              vm.getmessage("Err in datatble");
            });
        },
      },
    };
  },
  methods: {
    getSearchString(search) {
      console.log(search);

      let words = search.split(",").filter(Boolean).map(e => e.trim())


      let q = words.find((e) => e.includes("q")).split("=")[1];

      let d = words.find((e) => e.includes("dept")).split("=")[1];
      let l = words.find((e) => e.includes("l_t")).split("=")[1];
      let c = words.find((e) => e.includes("content_type")).split("=")[1];
      // console.log(words,q,d,l);

      let finalString = "Searched";

      if (q !== '') {
        finalString +=  ' for '+ q;
      }

      if (d) {
        finalString += ` in ${d} department`;
      }

      if (l) {
        finalString += ` ${l}`;
      }

      if (c) {
        finalString += ` under ${c}.`;
      }

      return finalString;
    },
  },
};
</script>
