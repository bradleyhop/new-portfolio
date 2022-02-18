<script>
export default {
  name: "NavDrawer",

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

.nav-img {
  flex-shrink: 0;
}
</style>
