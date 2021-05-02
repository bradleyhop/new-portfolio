<script>
import projects from '@/assets/projects.js';

export default {
  name: 'ExpansionPanel',
  data() {
    return {
      projectHeading: projects,
    }
  },
};
</script>

<template>
  <v-row>
    <v-col
      lg="8" sm="12"
      >
  <v-expansion-panels>
    <v-expansion-panel
      v-for="item in projectHeading"
      :key="item.i"
    >
      <v-expansion-panel-header>
        {{ item.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ item.copy }}
        <!-- nested expansion panels for projects -->
        <v-expansion-panels>
          <v-expansion-panel
              v-for="projectItem in item.projects"
              :key="projectItem.i"
              >
              <v-expansion-panel-header>
                {{ projectItem.title }}
              </v-expansion-panel-header>
            <v-expansion-panel-content>
              <a :href="projectItem.link"
                target="_blank"
                rel="noopener noreferrer"
                >
                gitHub
              </a>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- end nested panels -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-col>
  </v-row>
</template>

<style lang="scss">
</style>>
