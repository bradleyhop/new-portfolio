<script>
import ExpansionPanel from '@/components/ExpansionPanel.vue';
import PortCard from '@/components/PortCard.vue';
import fCC from '@/assets/data/fcc-data.js';
import extra from '@/assets/data/extra-data.js';

export default {
  name: 'Portfolio',
  components: {
    ExpansionPanel,
    PortCard,
  },

  data:() => ({
    freecodecampData: fCC, // freecodecampData project data
    extraData: extra, // extracurricular data
  }),
};
</script>

<template>
  <v-container fill-height class="align-start" fluid>
    <v-row>
      <v-col class="page-title"> PORTFOLIO </v-col>
    </v-row>

    <!-- top three projects to highlight -->
    <div class="d-flex flex-wrap justify-center justify-center">
      <!-- Choropleth Map project -->
      <PortCard
      :cardTitle="freecodecampData[0].projects[2].title"
        :liveLink="freecodecampData[0].projects[2].link"
        :gitLink="freecodecampData[0].projects[2].github"
        :imgSrc="
        require(`@/assets/screenshots/${freecodecampData[0].projects[2].img.src}?vuetify-preload`)
        "
        :imgAlt="freecodecampData[0].projects[2].img.alt"
        />

      <!-- AIC Color Match -->
      <PortCard
      :cardTitle="extraData[0].projects[0].title"
        :liveLink="extraData[0].projects[0].link"
        :gitLink="extraData[0].projects[0].github"
        :imgSrc="
        require(`@/assets/screenshots/${extraData[0].projects[0].img.src}?vuetify-preload`)
        "
        :imgAlt="extraData[0].projects[0].img.alt"
        />

      <!-- Pomodoro Timer -->
      <PortCard
      :cardTitle="freecodecampData[1].projects[1].title"
        :liveLink="freecodecampData[1].projects[1].link"
        :gitLink="freecodecampData[1].projects[1].github"
        :imgSrc="
        require(`@/assets/screenshots/${freecodecampData[1].projects[1].img.src}?vuetify-preload`)
        "
        :imgAlt="freecodecampData[1].projects[1].img.alt"
        />

    </div>

    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <a href="https://freecodecamp.org" target="_blank" rel="norefferer noopener">
          <div class="heading fcc-color">
            freeCodeCamp <i class="fab fa-free-code-camp fcc-icon"></i>
          </div>
        </a>
        <p class="heading-copy">
          I use freeCodeCamp as my primary source of learning and project building. Courses are
          designed to be taken in order starting with basic html and css, to learning frontend and
          backend frameworks with javascript.
        </p>
        <p class="heading-copy">
          Each project has a series of user stories checked by a unit testing tool provided by
          freeCodeCamp. The green hamburger-icon in the top left drops down to show a list of
          projects. Be sure to select the correct project from the drop-down menu, select "Run
          Tests", and then click the button below to show the results. Note: Vue is not officially
          supported by these unit tests, but I was able to get nearly all projects to pass.
        </p>

        <ExpansionPanel :projectData="freecodecampData" class="expan-panel" />

        <div class="heading">Extracurricular</div>
        <p class="heading-copy">
          In addition to freeCodeCamp, I use other resources to increase my knowledge and practice
          my skills. Here are various algorithm exercises, classes, and projects not part of the
          freeCodeCamp curriculum.
        </p>

        <ExpansionPanel :projectData="extraData" class="expan-panel" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.heading {
  font-size: 1.5rem;
}

.fcc-color {
  color: #00641f;
}

.fcc-icon {
  font-size: 1.25em;
}

.heading-copy {
  font-family: $Source-Sans-Pro;
  font-size: 1.1em;
}

.expan-panel {
  margin-bottom: 2em;
}
</style>
