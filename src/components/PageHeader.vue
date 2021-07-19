<script>
export default {
  name: 'PageHeader',

  props: {
    headerText: {
      type: String,
      default: () => '',
    },
  },
}
</script>>

<template>
  <v-row>
    <v-col align="center">
      <h1>{{ headerText }}</h1>
      <hr class="header-break">
    </v-col>
  </v-row>
</template>


<style lang="scss" scoped>
.header-break {
  width: 12rem;
}
</style>>

