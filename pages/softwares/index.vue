
<template>
  <div>
    <template v-if="!deviceCheck.hasCheckedDevice">
      <Devicecheck></Devicecheck>
    </template>

    <template v-else>
      <CustomHeader title="Softwares" />
      <b-container>
        <b-row class="text-left py-1 my-2">
          <b-col>
            <v-server-table
              url="softwares"
              :columns="columns"
              :options="options"
            >
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
                <b-button @click="handleDetail(row)" variant="outline-info"
                  >detail <font-awesome-icon :icon="['fas', 'info-circle']"
                /></b-button>
              </div>
              <div slot="id" slot-scope="{ row }">
                {{ hashCode(row.id.toString()) }}
              </div>
            </v-server-table>
          </b-col>
        </b-row>
        <b-modal
          ref="my-modal"
          size="lg"
          id="modal-center"
          centered
          :title="selectedData.name"
        >
          <span v-html="selectedData.description"></span>
        </b-modal>
      </b-container>
    </template>
  </div>
</template>

<script>
export default {
  layout: "content",
  middleware: "auth",
   head(){
    return {
      title: 'Softwares - PL Tutorials'
    }
  },

  data() {
    return {
      loading: false,
      error: false,
      selectedData: [],
      columns: ["id", "name", 'author', "download"],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          id: "#",
          author: 'Company',
          download: 'Actions'
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

  computed: {
    deviceCheck() {
      return this.$store.state.device;
    },
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
        additionalData: data.author == undefined ? '' : data.author,
      });
      window.open(data.link, "_blank").focus();
    },

    handleDetail(data) {
      this.selectedData = data;
      this.$refs["my-modal"].show();
    },
  },
};
</script>

