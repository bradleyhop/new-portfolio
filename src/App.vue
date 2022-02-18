<script>
import NavDrawer from "@/components/NavDrawer.vue";

export default {
  components: {
    NavDrawer,
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

      <!-- TODO: have a menu list in the toolbar, and only show the drawer on mobile -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" aria-label="menu">
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
