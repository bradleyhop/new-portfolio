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
    underlineHover: {
      type: Boolean,
      default: () => false,
    },
    whiteText: {
      type: Boolean,
      default: () => false,
    },
    drawerLink: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<template>
  <div>
    <router-link :class="underlineHover ? 'item-hover' : ''" :to="{ name: 'Home' }">
      <v-list-item :link="drawerLink ? 'link' : ''">
        <v-list-item-action>
          <v-icon color="secondary">
            {{ mdiHome }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <!-- dynamically bind class white--text here somehow -->
          <v-list-item-title :class="whiteText ? 'white--text' : ''"> Home </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link :class="underlineHover ? 'item-hover' : ''" :to="{ name: 'About' }">
      <v-list-item :link="drawerLink ? 'link' : ''">
        <v-list-item-action>
          <v-icon color="secondary">
            {{ mdiCardsHeart }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title :class="whiteText ? 'white--text' : ''"> About </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link :class="underlineHover ? 'item-hover' : ''" :to="{ name: 'Portfolio' }">
      <v-list-item :link="drawerLink ? 'link' : ''">
        <v-list-item-action>
          <v-icon color="secondary">
            {{ mdiCodeTags }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title :class="whiteText ? 'white--text' : ''"> Portfolio </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link :class="underlineHover ? 'item-hover' : ''" :to="{ name: 'Contact' }">
      <v-list-item :link="drawerLink ? 'link' : ''">
        <v-list-item-action>
          <v-icon color="secondary">
            {{ mdiEmail }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <!-- dynamically bind class white--text here somehow -->
          <v-list-item-title :class="whiteText ? 'white--text' : ''"> Contact </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.item-hover::after {
  content: "";
  display: block;
  width: 0;
  height: 4px;
  background: #f5f5f5;
  // transition: width 0.3s;
}

.item-hover:hover::after {
  width: 100%;
}
</style>
