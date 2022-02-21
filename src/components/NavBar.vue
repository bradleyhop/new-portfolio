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
      <router-link :to="item.routerLink">
        <!-- change background and text color on hover -->
        <v-hover v-slot:default="{ hover }">
          <v-list-item class="item-hover">
            <v-list-item-action>
              <v-icon color="secondary">
                {{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="hover ? 'black--text' : 'white--text'">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-hover>
      </router-link>
    </v-list>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  display: inline-block;
}

.menu-item {
  padding: 0;
  background: none;
}

.item-hover:hover {
  background-color: #f5f5f5;
}
</style>
