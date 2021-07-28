<!--
   - Contains skeletal work of page that will be present on all routes:
   -   Navbar, navigation, footer
   -->

<script>
export default {
  data: () => ({
    drawer: null, // menu drawer is closed on page load
  }),
};
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right temporary color="primaryLight">
      <v-list class="view-list">
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

        <router-link :to="{ name: 'About' }">
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="secondary">mdi-cards-heart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                About Me
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
              <v-list-item-title>
                Contact
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense elevate-on-scroll color="primary">
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" aria-label="menu">
      </v-app-bar-nav-icon>
    </v-app-bar>

    <!-- page contents plug in here -->
    <v-main>
      <router-view />
    </v-main>

    <v-footer color="primary">
      <v-spacer></v-spacer>

      <a href="https://github.com/bradleyhop" rel="noreferrer noopener" target="_blank">
        <span class="white--text">bradley smith &copy; {{ new Date().getFullYear() }}</span>
      </a>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
.view-list {
  margin-top: 2rem;
}
</style>
