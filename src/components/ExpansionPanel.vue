<script>
import ouvre from '@/assets/projects.js';

export default {
  name: 'ExpansionPanel',

  data:() => ({
      projectListings: ouvre, // project data to iterate
      overlay: false, // state of hover for image overlay for links
    }),

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

                      <div>
                      <v-hover>
                        <template v-slot:default="{ hover }">

                          <div>
                          <v-img v-if="projectItem.img.src"
                                 :src="require(`@/assets/screenshots/${projectItem.img.src}?vuetify-preload`)"
                                 :alt="projectItem.img.alt"
                                 :aspect-ratio="16/9"
                                 class="mx-auto"
                                 width="30em"
                                 >
                          </v-img>

                            <!-- hover overlay -->
                            <v-fade-transition>
                              <v-overlay
                                  v-if="hover"
                                  absolute
                                  color="grey darken-1"
                                  >
                                  <a :href="projectItem.link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >
                                  <v-icon size="8rem">
                                    mdi-link
                                  </v-icon>
                                  </a>

                                <a v-if="projectItem.github"
                                   :href="projectItem.github"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   >
                                   <v-icon size="6rem">
                                     mdi-github
                                   </v-icon>
                                </a>
                              </v-overlay>
                            </v-fade-transition>

                            </div>
                        </template>
                      </v-hover>
                      </div>

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
