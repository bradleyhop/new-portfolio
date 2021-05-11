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
                             'font-size: 2rem' : 'font-size: 3rem'"
                    >
                    Hello, my name is
                    <span
                        class="my-name"
                        :style="$vuetify.breakpoint.xs ?
                                 'font-size: 2.5rem' : 'font-size: 3.5rem'"
                        >
                        BRADLEY SMITH
                    </span>
                </p>
                <p
                    class="hero-copy"
                    :style="$vuetify.breakpoint.xs ?
                             'font-size: 1em' : 'font-size: 1.5em'"
                    >
                    I am a web developer. Not a designer.
                </p>

                <router-link
                    :to="{ name: 'Portfolio' }"
                    tag="v-btn"
                    >
                    <v-btn
                        color="secondary"
                        elevation="4"
                        large
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
                      height="16em"
                      width="16em"
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
}

.my-name {
  letter-spacing: 3px;
}
</style>
