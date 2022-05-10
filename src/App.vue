<script>
// dynamically load in components as needed
const NavDrawer = () => import("@/components/NavDrawer.vue");
const NavBar = () => import("@/components/NavBar.vue");

export default {
  data: () => ({
    drawer: false, // menu drawer is closed on page load
  }),

  computed: {
    userMenu() {
      // mobile first ;)
      if (this.$vuetify.breakpoint.mobile) return NavDrawer;
      else return NavBar;
    },
  },
};
</script>

<template>
  <v-app id="inspire">
    <v-app-bar app dense elevate-on-scroll color="primary">
      <v-spacer />

      <!-- menu bar or navigation drawer based on mobile breakpoint -->
      <component :is="userMenu" v-model="drawer" />

      <!-- hide menu icon if not on mobile; send click state to NavDrawer to show drawer -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="white"
        aria-label="menu"
        v-if="$vuetify.breakpoint.mobile"
      />
    </v-app-bar>

    <!-- page contents plug in here -->
    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary">
      <v-spacer />

      <a
        href="https://github.com/bradleyhop"
        rel="noreferrer noopener"
        target="_blank"
      >
        <v-hover v-slot="{ hover }">
          <span
            class="white--text"
            :class="
              hover ? 'text-decoration-underline' : 'text-decoration-none'
            "
          >
            bradley smith&nbsp;&copy;&nbsp;{{ new Date().getFullYear() }}
          </span>
        </v-hover>
      </a>
    </v-footer>
  </v-app>
</template>

<style lang="scss"></style>
