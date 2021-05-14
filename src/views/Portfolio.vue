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
  <v-container
      class="fill-height"
      fluid
      >
    <v-row>
      <v-col
          class="col-lg-8 offset-lg-2 col-sm-12"
          >
          <h2
              >
              freeCodeCamp
          </h2>
            <p>This is some basic text to show an explanation for things on this page.</p>

            <ExpansionPanel />

      </v-col>
    </v-row>
  </v-container>
</template>
