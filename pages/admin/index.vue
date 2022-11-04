<script>
export default {
  head() {
    return {
      title: "Admin - PL Tutorials",
    };
  },

  mounted() {
    var cleaned_host;
    if (window.location.host.indexOf("www.") === 0) {
      cleaned_host = window.location.host.replace("www.", "");
    }else{
      cleaned_host = window.location.host;
    }

    window.location.href = `https://admin.${cleaned_host}`;
  },
};
</script>
