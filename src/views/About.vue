<script>
export default {
  name: 'About',
};
</script>
<template>
  <v-container class="align-start" fill-height fluid>
    <v-row>
      <v-col class="page-title">
        ABOUT ME
      </v-col>
    </v-row>

    <v-row>
      <v-col offset-md="3" md="6">

        <div align="center" class="me-img">
          <v-img
            class="rounded-circle elevation-6"
            src="@/assets/me.jpg"
            alt="portrait of me looking confident"
            height="14em"
            width="14em"
            cover
          >
          </v-img>
        </div>

        <p>
          I am recent transplant from Chicago to the Belgrade Lakes area in Maine. I am passionate
          about learning and am always looking for new challenges. I love discovering new skills and
          technologies to produce easy to use and maintain websites and applications.
        </p>

        <p>
          Away from the screen, I enjoy dancing and teaching the Lindy Hop and other vernacular jazz
          dances, restoring and modding vintage video game systems, hiking and kayaking, and
          listening to records.
        </p>

        <div class="list-group">
          <div class="list-header">Current technology stack:</div>
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
              IDE is Vim within a Tmux session
            </li>
          </ul>
        </div>
        <!-- list-group -->

        <div class="list-group">
          <div class="list-header">I've built projects using:</div>
          <ul>
            <li>
              JQuery
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              Explicitly installed javascript libraries including D3.js, ProgressBar.js, math.js,
              and some AWS services
            </li>
          </ul>
        </div>
        <!-- list-group -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.list-group {
  margin-bottom: 1em;
}

.me-img {
  margin-bottom: 2em;
}
</style>
