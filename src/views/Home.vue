<script>
export default {
  name: 'Home',
};
</script>

<template>
  <v-container fill-height fluid class="home-container">
    <v-row align="center">
      <v-col offset-lg="3" lg="6" sm="12">
        <div class="hero-header header-text">
          Hello, my name is
          <br />
        </div>
        <div class="my-name header-text">
          Bradley Smith
        </div>
        <div class="hero-copy">
          I am a web developer based in Maine. I build great websites.
        </div>

        <router-link :to="{ name: 'Portfolio' }">
          <v-btn elevation="6" class="portfolio-button">
            Portfolio
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.home-container {
  background-color: $eggshell;
}

.header-text {
  font-family: $Poppins;
  line-height: 1.25;
}

.hero-header {
  font-size: 2em;
}

.my-name {
  font-family: Raleway, sans-serif !important;
  font-size: 5.5em;
  letter-spacing: 4px;
  margin: 0 0 0.25em 2em;

  @media only screen and (max-width: 800px) {
    margin: 0 0 0.25em 0;
  }
}

.hero-copy {
  font-family: $Poppins;
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.portfolio-button {
  background-color: $secondary !important;
  margin-bottom: 2em;

  &:hover {
    background-color: $secondaryLight !important;
  }
}
</style>
