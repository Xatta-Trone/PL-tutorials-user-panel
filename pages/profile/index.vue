<template>
  <div>
    <CustomHeader
      :title="$auth.user.name"
      :subtitle="'#' + $auth.user.student_id"
    />

    <b-container>
      <b-row>
        <b-col sm="12">
          <div class="my-5">
            <b-tabs content-class="mt-3" justified pills>
              <b-tab title="Info" active>
                <b-row>
                  <b-col><b-alert show variant="primary"> <strong>Please refrain from sharing your account with others.</strong> <br>  Such activity may lead to permanent account suspension. The website constantly monitors all activities to prevent account sharing. You can see your activities from the <strong>Activity</strong> tab.</b-alert></b-col>
                </b-row>
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
                          formatDateToString($auth.user.created_at)
                        }}</b-list-group-item
                      >
                    </b-list-group></b-col
                  >
                  <b-col sm="6">
                    <div class="text-center my-3">
                      <p>
                        Scan or click the link below to install our
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
              <b-tab title="Change password" lazy>
                <change-password />
              </b-tab>
              <b-tab title="Activity" lazy>

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
                    {{ formatDateToString(row.created_at) }}
                  </div>
                  <div slot="id" slot-scope="{ row }">
                    {{ hashCode(row.id.toString()) }}
                  </div>

                  <div slot="label" slot-scope="{ row }">
                    <div v-if="row.activity == 'searched'">{{ getSearchString(row.label) }}</div>
                    <div v-if="row.activity != 'searched'">{{ row.label }}</div>
                  </div>
                </v-server-table>
              </b-tab>
              <b-tab title="Devices" lazy>
                <LoginHistory></LoginHistory>
              </b-tab>
              <b-tab title="Saved Devices" lazy>
                <saved-devices></saved-devices>
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
   head(){
    return {
      title: 'Profile - PL Tutorials'
    }
  },
  data() {
    return {
      appUrl:
        "https://play.google.com/store/apps/details?id=com.pltutorials.plandroid",
      columns: ["id", "activity", "label", "created_at"],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          id: "#",
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

      if(!search.includes('q=')){
        return search;
      }

      let words = search.split(",").filter(Boolean).map(e => e.trim())

      let q = words.find((e) => e.includes("q")).split("=")[1];
      let d = words.find((e) => e.includes("dept")).split("=")[1];
      let l = words.find((e) => e.includes("l_t")).split("=")[1];
      let c = words.find((e) => e.includes("content_type")).split("=")[1];
      let cs = words.find((e) => e.includes("course_slug"))?.split("=")[1];
      let ct = words.find((e) => e.includes("course_title"))?.split("=")[1];
      // console.log(words,q,d,l,cs,ct);

      let finalString = "Searched";

      if (q !== '') {
        finalString +=  ' for '+ q;
      }

      finalString += ` ${this.getDeptString(d,l,cs,ct)}`;

      // if (d) {
      //   finalString += ` in ${d.toUpperCase()} department`;
      // }

      // if (l) {
      //   finalString += ` ${l} level-term`;
      // }

      if (c) {
        finalString += ` :: content type: ${c}.`;
      }

      return finalString;
    },

    getDeptString(dept,levelTerm,course_slug,course_name){

      console.log(dept,levelTerm,course_slug,course_name);
      let returnString = "";

      if(dept.length > 0){
        returnString += `${dept}`;
      }
      if(levelTerm.length > 0){
        returnString += `/${levelTerm}`;
      }
      if(course_slug != undefined){
        returnString += `/${course_slug}`;
      }

     returnString =  returnString.toUpperCase();

       if(course_name != undefined){
        returnString += ` ${course_name}`;
      }

      return returnString;


    }
  },
};
</script>
