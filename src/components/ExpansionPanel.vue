<script>
import projects from '@/assets/projects.js';

export default {
  name: 'ExpansionPanel',
  data() {
    return {
      projectListings: projects, // project data to iterate
    }
  },
  methods: {
    imgSrc(src) {
      return src;
    }
  },
};
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="item in projectListings"
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
              <v-img
                  :src="projectItem.img.src"
                  :alt="projectItem.img.alt"
                  :aspect-ratio="16/9"
                  width="100px"
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
