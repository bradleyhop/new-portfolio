<script>
export default {
  name: 'Home',
};
</script>

<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col offset-lg="4" lg="4" sm="12">
        <div class="hero-header header-text">
          Hello, my name is
          <br />
        </div>
        <div class="my-name header-text">
          BRADLEY SMITH
        </div>
        <div class="hero-copy">
          I am a web developer based in Maine. I build great websites.
        </div>

        <router-link :to="{ name: 'Portfolio' }">
          <v-btn elevation="1" class="portfolio-button">
            Portfolio
          </v-btn>
        </router-link>

      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.header-text {
  font-family: $Poppins;
  font-weight: 200;
  line-height: 1.25;
}

.hero-header {
  font-size: 2em;
}

.my-name {
  letter-spacing: 4px;
  font-size: 3.25em;
  margin: 0 0 0.25em 2em;

  @media only screen and (max-width: 800px) {
    margin: 0 0 0.25em 0;
  }
}

.hero-copy {
  font-family: $Source-Sans-Pro;
  font-size: 1.25em;
  margin-bottom: 0.5em;
}

.portfolio-button {
  margin-bottom: 2em;
  background-color: $secondary !important;
  color: white;

  &:hover {
    background-color: $secondaryLight !important;
  }
}
</style>
