<!--
   - Contains skeletal work of page that will be present on all routes:
   -   Navbar, navigation, footer
   -->

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      temporary
      >
      <v-list dense>

        <router-link :to="{ name: 'Home' }">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-home</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link :to="{ name: 'Portfolio' }">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-code-tags</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                Portfolio
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link :to="{ name: 'Contact' }">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-email</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      >
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white">
      </v-app-bar-nav-icon>
    </v-app-bar>

    <router-view />

    <v-footer
      color="primary"
      app
      >
      <v-spacer></v-spacer>

      <span class="white--text">bradley smith &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
</style>>
