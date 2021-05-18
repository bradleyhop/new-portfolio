<script>
import ExpansionPanel from '@/components/ExpansionPanel.vue';

export default {
  name: 'Portfolio',
  components: {
    ExpansionPanel,
  },
};
</script>

<template>
  <v-container fill-height class="align-start" fluid>
    <v-row>
      <v-col class="page-title">
        PORTFOLIO
      </v-col>
    </v-row>

    <v-row>
      <v-col class="col-lg-8 offset-lg-2 col-sm-12">
        <a href="https://freecodecamp.org" target="_blank" rel="norefferer noopener">
          <div class="heading">
            freeCodeCamp &#40;<v-icon size="1.65rem" class="heading-icon" color="#00641f">
              mdi-fire
            </v-icon>&#41;
          </div>
        </a>
        <p class="heading-copy">
          I use freeCodeCamp as my primary source of learning and project building. Courses are
          designed to be taken in order starting with basic html and css, to learning frontend and
          backend frameworks with javascript.
        </p>

        <ExpansionPanel />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.heading {
  font-size: 1.5rem;
  color: #00641f;
}
.heading-copy {
  font-family: $Source-Sans-Pro;
}
.heading-icon {
  transform: scale(-1, 1);
}
</style>
