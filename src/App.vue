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
      <div class="nav-container">
        <div class="nav-list-container">
          <v-list class="view-list">
            <router-link :to="{ name: 'Home' }">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon color="secondary">mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Home </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link :to="{ name: 'About' }">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon color="secondary">mdi-cards-heart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> About Me </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link :to="{ name: 'Portfolio' }">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon color="secondary">mdi-code-tags</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Portfolio </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link :to="{ name: 'Contact' }">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon color="secondary">mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Contact </v-list-item-title>
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

<style lang="scss">
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

.nav-img {
  flex-shrink: 0;
}
</style>
