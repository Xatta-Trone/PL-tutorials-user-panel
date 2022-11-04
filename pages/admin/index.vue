<script>
export default {

  head() {
    return {
      title: "Admin - PL Tutorials",

    };
  },

  mounted(){
    window.location.href = `https://admin.${window.location.host.replace("www.","")}`;
  }

}
</script>
