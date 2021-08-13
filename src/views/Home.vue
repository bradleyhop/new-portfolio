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
          <v-btn elevation="6" large class="portfolio-button" color="secondary">
            <span class="button-text">
              Portfolio
            </span>
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
  font-size: 1.5rem;

  @media only screen and (min-width: 800px) {
    font-size: 2rem;
  }
}

.my-name {
  font-family: Raleway, sans-serif !important;
  font-size: 4.5rem;
  letter-spacing: 4px;
  margin: 0 0 0.25rem 0;

  @media only screen and (min-width: 800px) {
    font-size: 5.5rem;
    margin: 0 0 0.25rem 2rem;
  }
}

.hero-copy {
  font-family: $Poppins;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
}

.button-text {
  color: #000; // default white fails accessibility contrast
}
</style>
