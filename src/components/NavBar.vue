<script>
import menu from "@/assets/data/menu.js";

export default {
  name: "NavBar",

  data: () => ({
    menuItem: menu,
  }),
};
</script>

<template>
  <div>
    <v-list class="menu-item" v-for="(item, i) in menuItem" :key="i">
      <router-link class="item-hover" :to="item.routerLink">
        <!-- change background and text color on hover -->
        <v-list-item>
          <v-list-item-action>
            <v-icon color="secondary">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  display: inline-flex;
  background: none;
}

.item-hover::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  background: #f5f5f5;
  // transition: width 0.3s;
}

.item-hover:hover::after {
  width: 100%;
}
</style>
