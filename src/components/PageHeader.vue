<script>
export default {
  name: "PageHeader",

  props: {
    headerText: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <v-row>
    <v-col align="center">
      <h1>{{ headerText }}</h1>
      <div class="header-break" />
      <div class="second-header-break" />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.header-break {
  background-color: #424242;
  border-radius: 5px;
  color: #424242;
  height: 2px;
  margin-bottom: 0.5rem;
  width: 11rem;
}

.second-header-break {
  @extend .header-break;

  margin: 0;
  width: 5rem;
}
</style>
