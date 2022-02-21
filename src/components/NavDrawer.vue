<script>
import menu from "@/assets/data/menu.js";

export default {
  name: "NavDrawer",

  data: () => ({
    menuItem: menu,
  }),

  props: {
    value: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<template>
  <!-- hide-overlay because its obstucting navigation somehow -->
  <v-navigation-drawer
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    app
    right
    temporary
    color="primaryLight"
    hide-overlay
  >
    <div class="nav-container">
      <div class="nav-list-container view-list">
        <v-list class="no-padding" v-for="(item, i) in menuItem" :key="i">
          <router-link :to="item.routerLink">
            <v-list-item link>
              <v-list-item-action>
                <v-icon color="secondary">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </div>
      <!-- nav-list-container -->

      <!-- brand image of myself pushed to the bottom of the slide-out menu -->
      <div class="nav-img">
        <v-img src="@/assets/og.jpg" contain> </v-img>
      </div>
    </div>
    <!-- nav-container -->
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.nav-list-container {
  flex: 1 0 auto;
}

.view-list {
  margin-top: 2rem;
}

.no-padding {
  padding: 0;
}

.nav-img {
  flex-shrink: 0;
}
</style>
