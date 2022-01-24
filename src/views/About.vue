<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "About",

  components: {
    PageHeader,
  },
};
</script>

<template>
  <v-container class="align-start about-container" fill-height fluid>
    <PageHeader headerText="About Me" />

    <v-row>
      <!-- 'cols' implies xs breakpoint in vuetify -->
      <v-col align="center" cols="12" align-self="center" md="3">
        <v-img
          class="rounded-circle elevation-8"
          src="@/assets/screenshots/me.jpg"
          alt="portrait of me looking confident"
          :height="$vuetify.breakpoint.xs ? '12em' : '16em'"
          :width="$vuetify.breakpoint.xs ? '12em' : '16em'"
          cover
        >
        </v-img>
      </v-col>

      <v-col cols="12" md="5" align-self="center">
        <p class="me-copy">
          I am genuinely curious and am always looking for new challenges. I love developing new
          skills and discovering technologies to produce easy both to use and maintain websites and
          applications. As a recent transplant from Chicago to the Belgrade Lakes area in Maine, I
          am looking for a remote position.
        </p>

        <p class="me-copy">
          I look forward to transferring the soft skills I have acquired in the service industry and
          as a dance instructor and performer: strong communication skills especially in
          instructions and empathy; collaboration with other creators; ability to prioritize tasks
          in real-time to swiftly and efficiently complete tasks on time; mostly, I enjoy helping
          others and problem solving.
        </p>

        <p class="me-copy">
          Away from the screen, I enjoy dancing and teaching the Lindy Hop and other vintage jazz
          dances, restoring and modding vintage video game systems, hiking and kayaking, and
          collecting records.
        </p>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col cols="12" md="4" align-self="center">
        <div class="list-group me-copy">
          <div class="list-header">Current skill stack:</div>
          <ul>
            <li>
              HTML5
            </li>
            <li>
              CSS3
            </li>
            <li>
              Javascript
            </li>
            <li>
              Vue.js, Vue CLI, Vue Router, Vuetify
            </li>
            <li>
              SASS
            </li>
            <li>
              IDE is Vim (with plugins) within Tmux
            </li>
          </ul>
        </div>
        <!-- list-group -->

        <div class="list-group me-copy">
          <div class="list-header">I've built projects using:</div>
          <ul>
            <li>
              JQuery
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              Various javascript libraries including D3.js, ProgressBar.js, math.js, and S3 and SQS
              Amazon Web Services
            </li>
          </ul>
        </div>
        <!-- list-group -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.about-container {
  background-color: $not-green;
}

.me-copy {
  font-family: $Source-Sans-Pro;
  font-size: 1.1rem;
}

.list-group {
  margin-bottom: 1em;
}
</style>
