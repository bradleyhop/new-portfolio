<script>
export default {
  name: 'PortCard',

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
      type: Object,
      default: () => {},
    },
    imgAlt: {
      type: String,
      default: () => '',
    },
  },

};
</script>

<template>
  <v-card class="port-card-container">
    <v-img
      class="card-img"
      :src=imgSrc
      :alt=imgAlt
      :aspect-ratio="16/9"
      >
    </v-img>
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
  </v-card>
</template>

<style lang="scss" scoped>
.port-card-container {
  margin: 1rem;
  width: 20rem;
}

.card-img {
  max-width: 20rem;
}

.card-link {
  margin: 0;
  margin-right: 0.875rem;
}
</style>
