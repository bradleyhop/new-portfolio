<script>
import PageHeader from "@/components/PageHeader.vue";
import PortCard from "@/components/PortCard.vue";
import ExpansionPanel from "@/components/ExpansionPanel.vue";
// arrays holding project info
import fCC from "@/assets/data/fcc-data.js";
import extra from "@/assets/data/extra-data.js";
// load only the icons we need!
import { mdiFire } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "Portfolio",
  components: {
    PageHeader,
    ExpansionPanel,
    PortCard,
  },

  data: () => ({
    freecodecampData: fCC, // freecodecamp project data
    extraData: extra, // extracurricular data
    // mdi icons
    mdiFire,
    mdiOpenInNew,
  }),
};
</script>

<template>
  <v-container fill-height class="align-start" fluid>
    <PageHeader headerText="Portfolio" />

    <v-row>
      <v-col align="center">
        <h2 class="grey--text text--darken-2">Featured Projects</h2>
      </v-col>
    </v-row>

    <!-- top three projects to highlight -->
    <v-row align="center" class="d-flex flex-wrap justify-center">
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
    </v-row>

    <v-row>
      <v-col align="center">
        <h2 class="grey--text text--darken-2">Complete Portfolio</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <a
          href="https://frontendmentor.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h3>
            <img
              src="../assets/frontend-mentor-seeklogocom.svg"
              alt="frontend mentor icon"
              class="fmIcon"
            />
            <span class="fmText">Frontend Mentor</span>
          </h3>
        </a>
        <p class="heading-copy">
          This community-based learning platform helps developers learn and hone
          their skills with real-world frontend projects. With premium access, I
          choose and build projects using a professional design file,
          <a
            href="https://figma.com"
            target="_blank"
            rel="noreferrer noopener"
            class="figma-link"
            >Figma</a
          >
          in my case, to create the site. I can then ask for review and review
          my peers' projects. Links to my completed projects and source code
          can be found on my profile.
        </p>
        <p class="fm-link-copy">
          <a
            href="https://frontendmentor.io/profile/bradleyhop"
            target="_blank"
            rel="noreferrer noopener"
            >Find my Frontend Mentor portofolio here<v-icon
              size="1.5rem"
              class="fm-port-icon"
              >{{ mdiOpenInNew }}</v-icon
            >
          </a>
        </p>
        <!-- freecodecamp -->
        <a
          href="https://freecodecamp.org"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h3 class="fcc-color">
            freeCodeCamp
            <!-- home-made freeCodeCamp icon using material icon fire and some css trickery -->
            &lpar;
            <v-icon class="fcc-icon">{{ mdiFire }}</v-icon>
            &rpar;
          </h3>
        </a>
        <p class="heading-copy">
          I use freeCodeCamp as my primary source of learning and project
          building. Courses are designed to be taken in order starting with
          basic HTML and CSS, to learning frontend and backend frameworks with
          javascript.
        </p>
        <p class="heading-copy">
          Each project has a series of user stories checked by a unit testing
          tool provided by freeCodeCamp. The green hamburger-icon in the top
          left drops down to show a list of projects. Be sure to select the
          correct project from the drop-down menu, select "Run Tests", and then
          click the button below to show the results. Note: Vue is not
          officially supported by these unit tests, but I was able to get nearly
          all projects to pass.
        </p>

        <ExpansionPanel :projectData="freecodecampData" class="expan-panel" />

        <h3>Extracurricular</h3>
        <p class="heading-copy">
          In addition to freeCodeCamp, I use other resources to increase my
          knowledge and practice my skills. Here are various algorithm
          exercises, classes, and projects not part of the freeCodeCamp
          curriculum.
        </p>

        <ExpansionPanel :projectData="extraData" class="expan-panel" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.fmText {
  color: rgb(62, 84, 163);
  margin-right: 1rem;

  &:hover {
    text-decoration: underline;
  }
}

.fmIcon {
  height: 1rem;
  width: 1rem;
  margin-right: 0.25rem;
}

.figma-link {
  color: #a259ff;

  &:hover {
    text-decoration: underline;
  }
}

.fm-link-copy >* {
  color: rgb(62, 84, 163);
  &:hover {
    text-decoration: underline;
  }
}

.fm-port-icon {
  color: rgb(62, 84, 163);
  margin-left: 0.25rem;
  vertical-align: bottom;
}

.fcc-color {
  color: #00641f;

  &:hover {
    text-decoration: underline;
  }
}

.fcc-icon {
  color: #00641f;
  transform: scaleX(-1);
  vertical-align: text-bottom;
  margin-left: -10px;
  margin-right: -10px;
}

.heading-copy {
  font-family: $Source-Sans-Pro;
  font-family: swap;
  font-size: 1.1rem;
}

.expan-panel {
  margin-bottom: 2em;
}
</style>
