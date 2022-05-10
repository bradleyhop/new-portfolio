<script>
import MenuList from "@/components/MenuList.vue";
// load mdi icons
import { mdiHome } from "@mdi/js";

export default {
  name: "NavDrawer",

  components: {
    MenuList,
  },

  data: () => ({
    // mdi icons
    mdiHome,
  }),

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <!-- hide-overlay because its obstucting navigation somehow -->
  <v-navigation-drawer
    :value="value"
    v-on:input="$emit('input', $event)"
    app
    right
    temporary
    color="primaryLight"
    hide-overlay
  >
    <MenuList class="mt-8" :drawerLink="true" />
  </v-navigation-drawer>
</template>

<style lang="scss"></style>
