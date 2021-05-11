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
                class="text-center"
                >

                <p
                    class="hero-header"
                    >
                    Hello, my name is
                    <span
                        class="my-name"
                        >
                        BRADLEY SMITH
                    </span>
                </p>
                <p
                    class="hero-copy"
                    >
                    I am a web developer. Not a designer.
                </p>

                <router-link
                    to="/portfolio"
                    tag="v-btn"
                    >
                    <v-btn
                        color="secondary"
                        elevation="4"
                        x-large
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
                      >
                  </v-img>
              </v-col>
          </v-row>

    </v-container>
  </v-main>
</template>>

<style lang="scss" scoped>
.hero-header {
  font-size: 3rem;
  font-family: $Open-Sans;
}

.hero-copy {
  font-size: 1.5rem;
}
</style>>
