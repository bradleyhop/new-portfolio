<script>
import ExpansionPanel from '@/components/ExpansionPanel.vue';
import projects from '@/assets/projects.js';

export default {
  name: 'Portfolio',
  components: {
    ExpansionPanel,
  },
  created() {
    console.log(projects);
  },
};
</script>

<template>
  <v-container fill-height class="align-start" fluid>
    <v-row>
      <v-col class="page-title">
        PORTFOLIO
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-lg-8 offset-lg-2 col-sm-12">
        <div class="heading">
          freeCodeCamp
        </div>
        <p class="heading-copy">
          This is some basic text to show an explanation for things on this page.
        </p>

        <ExpansionPanel />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.heading {
  font-size: 1.5rem;
  color: #00641f;
}
.heading-copy {
  font-family: $Source-Sans-Pro;
}
</style>>
