<template>
  <div class="error-message">
    {{message}}
  </div>
</template>

<script lang="ts">
export default {
  name: "ErrorComponent",
  props:[
    'message',
  ]
}
</script>

<style scoped>
.error-message{
  color: red;
  font-weight: bold;
}
</style>
