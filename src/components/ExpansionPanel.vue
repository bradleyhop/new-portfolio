<script>
import ouvre from '@/assets/projects.js';

export default {
  name: 'ExpansionPanel',
  data() {
    return {
      projectListings: ouvre, // project data to iterate
    }
  },

};
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item, i) in projectListings"
      :key="i"
    >
      <v-expansion-panel-header>
        {{ item.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ item.copy }}
        <!-- nested expansion panels for projects -->
        <v-expansion-panels>
          <v-expansion-panel
              v-for="(projectItem, j) in item.projects"
              :key="j"
              >
              <v-expansion-panel-header>
                {{ projectItem.title }}
              </v-expansion-panel-header>
            <v-expansion-panel-content>
              <!-- TODO: ask how to link in images -->
              <v-img
                  :src="require(`@/assets/screenshots/${projectItem.img.src}`)"
                  alt=""
                  :aspect-ratio="16/9"
                  width="18em"
                  >
              </v-img>
                <a :href="projectItem.github"
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
</template>

<style lang="scss">
</style>>
