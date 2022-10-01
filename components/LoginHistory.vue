<template>
  <v-server-table url="user-logins" :columns="columns" :options="options">
    <div
      slot="updated_at"
      slot-scope="{ row }"
      class="d-flex justify-content-around"
    >
      {{ formatDateToString(row.updated_at) }}
    </div>
    <div slot="id" slot-scope="{ row }">
      {{ hashCode(row.id.toString()) }}
    </div>



  </v-server-table>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        "id",
        "user_ip",
        "location",
        "device",
        // "fingerprint",
        "updated_at",
      ],
      options: {
        perPage: 10,
        perPageValues: [5, 10, 15, 25, 50, 100],
        pagination: { chunk: 5 },
        orderBy: { ascending: false },
        headings: {
          id: "#",
          updated_at: "Last Active",
          user_ip: "IP Address",
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
};
</script>
