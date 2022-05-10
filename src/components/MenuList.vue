<script>
import { mdiHome } from "@mdi/js";
import { mdiCardsHeart } from "@mdi/js";
import { mdiCodeTags } from "@mdi/js";
import { mdiEmail } from "@mdi/js";

export default {
  name: "MenuList",

  data: () => ({
    // mdi icons
    mdiHome,
    mdiCardsHeart,
    mdiCodeTags,
    mdiEmail,
  }),

  props: {
    whiteText: {
      type: Boolean,
      default: false,
    },
    drawerLink: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <router-link
      :to="{ name: 'Home' }"
    >
      <v-btn text height="100%" width="100%" class="pa-0">
        <v-list-item :link="drawerLink">
          <v-list-item-action>
            <v-icon color="secondary">
              {{ mdiHome }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- dynamically bind class white--text here somehow -->
            <v-list-item-title :class="whiteText ? 'white--text' : ''">
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-btn>
    </router-link>

    <router-link
      :to="{ name: 'About' }"
    >
      <v-btn text height="100%" width="100%" class="pa-0">
        <v-list-item :link="drawerLink">
          <v-list-item-action>
            <v-icon color="secondary">
              {{ mdiCardsHeart }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :class="whiteText ? 'white--text' : ''">
              About
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-btn>
    </router-link>

    <router-link
      :to="{ name: 'Portfolio' }"
    >
      <v-btn text height="100%" width="100%" class="pa-0">
        <v-list-item :link="drawerLink">
          <v-list-item-action>
            <v-icon color="secondary">
              {{ mdiCodeTags }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :class="whiteText ? 'white--text' : ''">
              Portfolio
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-btn>
    </router-link>

    <router-link
      :to="{ name: 'Contact' }"
    >
      <v-btn text height="100%" width="100%" class="pa-0">
        <v-list-item :link="drawerLink">
          <v-list-item-action>
            <v-icon color="secondary">
              {{ mdiEmail }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- dynamically bind class white--text here somehow -->
            <v-list-item-title :class="whiteText ? 'white--text' : ''">
              Contact
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-btn>
    </router-link>
  </div>
</template>

<style lang="scss"></style>
