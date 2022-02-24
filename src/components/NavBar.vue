<script>
import MenuList from "@/components/MenuList.vue";

export default {
  name: "NavBar",

  components: {
    MenuList,
  },
};
</script>

<template>
  <v-list class="menu-background">
    <MenuList class="display-inline" :underlineHover="true" :whiteText="true" />
  </v-list>
</template>

<style lang="scss" scoped>
.menu-background {
  background: none;
}

.display-inline {
  display: inline-flex;
}
</style>
