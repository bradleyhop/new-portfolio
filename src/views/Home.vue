<script>
export default {
  name: "Home",
};
</script>

<template>
  <v-container fill-height fluid class="home-container">
    <div class="content-container">
      <div class="hero-header header-text">
        Hello, my name is
        <br />
      </div>
      <div class="my-name header-text">Bradley Smith</div>
      <div class="hero-copy">
        I am a web developer based in Maine.<br />
        I build great websites.
      </div>

      <div class="bottom-container">
        <router-link :to="{ name: 'Portfolio' }">
          <v-hover v-slot="{ hover }">
            <v-btn
              :elevation="hover ? 4 : 2"
              large
              class="mb-4 black--text"
              color="secondary"
              aria-label="Bradley's Portfolio"
              title="Bradley's Portfolio"
            >
              Portfolio
            </v-btn>
          </v-hover>
        </router-link>

        <v-img
          contain
          class="brand-me rounded elevation-4"
          min-width="12rem"
          max-width="16rem"
          :aspect-ratio="16 / 9"
          src="@/assets/og.jpg"
        />
      </div>
      <!-- bottom-container -->
    </div>
    <!-- content-container -->
  </v-container>
</template>

<style lang="scss" scoped>
.home-container {
  background-color: $eggshell;
}

.content-container {
  width: 100%;
  margin: 0;

  @media only screen and (min-width: 800px) {
    width: 41rem;
    margin: auto;
  }
}

.header-text {
  font-family: $Poppins;
  font-display: swap;
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
  font-display: swap;
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
  font-display: swap;
  font-size: 1.25rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
}

.bottom-container {
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
}

.brand-me {
  margin-left: 0;

  @media only screen and (min-width: 800px) {
    margin-left: 16rem;
  }
}
</style>
