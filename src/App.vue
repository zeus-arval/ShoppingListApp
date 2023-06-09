<template v-cloak>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script lang="ts">
import "@/assets/style.css";
import MainLayout from '@/layouts/MainLayout.vue';
import {useRoute} from "vue-router";

export default({
  computed: {
    layout() { return `${useRoute().meta.layout}-layout`},
  },
  components: {
    MainLayout,
  }
})
</script>
