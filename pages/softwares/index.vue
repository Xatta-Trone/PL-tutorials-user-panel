
<template>
  <div>
    <CustomHeader title="Softwares" />
    <b-container>
      <b-row class="text-left py-1 my-2">
        <b-col>
          <v-server-table url="softwares" :columns="columns" :options="options">
            <div
              slot="download"
              slot-scope="{ row }"
              class="d-flex justify-content-around"
            >
              <a
                href=""
                @click.prevent="handleClick(row)"
                title="Download book"
              >
                <b-button variant="outline-primary"
                  ><font-awesome-icon :icon="['fas', 'file-download']" />
                  download</b-button
                ></a
              >
              <b-button @click="handleDetail(row)" variant="outline-info">detail <font-awesome-icon :icon="['fas', 'info-circle']" /></b-button>
            </div>
          </v-server-table>
        </b-col>
      </b-row>
      <b-modal ref="my-modal" size="lg" id="modal-center" centered :title="selectedData.name">
        <span v-html="selectedData.description"></span>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "content",
  middleware: "auth",

  data() {
    return {
      loading: false,
      error: false,
      selectedData:[],
      columns: ["id", "name", "download"],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          id: "Sl. No.",
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
  mounted() {},
  methods: {
    handleClick(data) {
      console.log(data);
      this.saveActivity({
        activity: "downloaded",
        model_type: "software",
        model_id: data.id,
        causer_id: this.$auth.loggedIn ? this.$auth.user.id : 0,
        label: data.name,
      });
      window.open(data.link, "_blank").focus();
    },

    handleDetail(data) {
      this.selectedData = data;
      this.$refs['my-modal'].show();
    },
  },
};
</script>
