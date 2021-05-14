<script>
export default {
  name: 'Home',
};
</script>

<template>
  <v-main>
    <v-container
        class="fill-height"
        fluid
        >

        <v-row
            align="center"
            >
            <v-col
                offset-lg="2"
                lg="8"
                sm="12"
                >

                <p
                    class="hero-header"
                    :style="$vuetify.breakpoint.xs ?
                             'font-size: 1.5rem' : 'font-size: 2rem'"
                    >
                    Hello, my name is
                    <br />
                    <span
                        class="my-name"
                        :style="$vuetify.breakpoint.xs ?
                                  'font-size: 2rem;'
                                  : 'font-size: 3rem; margin-left: 10rem;'"
                        >
                        BRADLEY SMITH
                    </span>
                </p>
                <p
                    class="hero-copy"
                    :style="$vuetify.breakpoint.xs ?
                             'font-size: 1em' : 'font-size: 1.5em'"
                    >
                    I am a web developer based in Maine. I build great websites.
                </p>

                <router-link
                    :to="{ name: 'Portfolio' }"
                    tag="v-btn"
                    >
                    <v-btn
                        color="secondary"
                        elevation="1"
                        >
                        Portfolio
                    </v-btn>
                </router-link>

            </v-col>
        </v-row>

          <v-row
              >
              <v-col
                  align="center"
                  >
                  <v-img
                      class="rounded-circle elevation-6"
                      src="@/assets/me.jpg"
                      alt="portrait of me looking confident"
                      height="14em"
                      width="14em"
                      cover
                      >
                  </v-img>
              </v-col>
          </v-row>

    </v-container>
  </v-main>
</template>

<style lang="scss" scoped>
.hero-header {
  font-family: $Open-Sans;
  font-weight: 300;
  line-height: 1.25;
}

.hero-copy {
  font-family: $Open-Sans;
}

.my-name {
  letter-spacing: 4px;
}
</style>
