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
        <template v-slot:actions>
          <v-icon color="primary">$expand</v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ item.copy }}
        <!-- nested expansion panels for projects -->
        <v-expansion-panels
          :popout="true"
          >
          <v-expansion-panel
              v-for="(projectItem, j) in item.projects"
              :key="j"
              >
              <v-expansion-panel-header>
                {{ projectItem.title }}
                <template v-slot:actions>
                  <v-icon color="secondary">$expand</v-icon>
                </template>
              </v-expansion-panel-header>
            <v-expansion-panel-content>
              <!-- NB: all images must be present as requested otherwise the
                component will not render! -->
                <a :href="projectItem.link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <v-img v-if="projectItem.img.src"
                    :src="require(`@/assets/screenshots/${projectItem.img.src}?vuetify-preload`)"
                    alt=""
                    :aspect-ratio="16/9"
                    width="30em"
                    >
                    </v-img>
                    <v-icon>mdi-link</v-icon>
                </a>
                <a v-if="projectItem.github"
                  :href="projectItem.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <v-icon>mdi-github</v-icon>
                </a>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- end nested panels -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style lang="scss" scoped>
</style>>
