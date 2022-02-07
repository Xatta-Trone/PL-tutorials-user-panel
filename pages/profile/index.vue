<template>
  <div>
    <CustomHeader :title="'#' + $auth.user.student_id" />
    {{ $auth.user.name }}
  </div>
</template>
<script>
export default {
  layout: "content",
  middleware: "auth",
};
</script>
