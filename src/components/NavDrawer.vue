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
    <div class="nav-container">
      <div class="nav-list-container view-list">
        <v-list class="no-padding">
          <MenuList :drawerLink="true" />
        </v-list>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.view-list {
  margin-top: 2rem;
}

.no-padding {
  padding: 0;
}
</style>
