<script>
import NavDrawer from "@/components/NavDrawer.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavDrawer,
    NavBar,
  },

  data: () => ({
    drawer: false, // menu drawer is closed on page load
  }),
};
</script>

<template>
  <v-app id="inspire">
    <v-app-bar app dense elevate-on-scroll color="primary">
      <v-spacer></v-spacer>

      <!-- hide menu bar on mobile -->
      <NavBar v-show="!$vuetify.breakpoint.mobile" />

      <!-- hide menu icon not on mobile; send click state to NavDrawer to show drawer -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="white"
        aria-label="menu"
        v-show="$vuetify.breakpoint.mobile"
      >
      </v-app-bar-nav-icon>

      <NavDrawer v-model="drawer" />
    </v-app-bar>

    <!-- page contents plug in here -->
    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary">
      <v-spacer></v-spacer>

      <a href="https://github.com/bradleyhop" rel="noreferrer noopener" target="_blank">
        <v-hover v-slot="{ hover }">
          <span
            class="white--text"
            :class="hover ? 'text-decoration-underline' : 'text-decoration-none'"
          >
            bradley smith&nbsp;&copy;&nbsp;{{ new Date().getFullYear() }}
          </span>
        </v-hover>
      </a>
    </v-footer>
  </v-app>
</template>

<style lang="scss"></style>
