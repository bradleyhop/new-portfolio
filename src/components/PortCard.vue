<script>
import fCC from '@/assets/data/fcc-data.js';

export default {
  name: 'PortCard',

  data:() => ({
    freecodecampData: fCC,
  }),

  props: {
    cardTitle: {
      type: String,
      default: () => '',
    },
    liveLink: {
      type: String,
      default: () => '',
    },
    gitLink: {
      type: String,
      default: () => '',
    },
    imgSrc: {
      type: String,
      default: () => '',
    },
    imgAlt: {
      type: String,
      default: () => '',
    },
  },

};
</script>

<template>
  <v-card>
    <v-row>
      <v-col cols="6">
        <v-card-title>{{ cardTitle }}</v-card-title>
        <v-card-subtitle>
          <a
            :href=liveLink
            target="_blank"
            rel="noopener noreferrer"
            title="live demo"
          >
            <v-icon size="2.5rem" class="icon-link card-link">
              mdi-open-in-new
            </v-icon>
          </a>

          <a
            :href=gitLink
            target="_blank"
            rel="noopener noreferrer"
            title="source code"
          >
            <v-icon size="2.5rem" class="icon-link card-link">
              mdi-github
            </v-icon>
          </a>
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-img
          class="card-img"
          :src=imgSrc
          :alt=imgAlt
          :aspect-ratio="16/9"
          >
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped>
.card-img {
  width: 15rem;
}
</style>
