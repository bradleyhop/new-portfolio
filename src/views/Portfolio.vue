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
    fluid>
    <v-row>
      <v-col>
        <h2>freeCodeCamp</h2>
        <ExpansionPanel />
      </v-col>
    </v-row>
  </v-container>
</template>
