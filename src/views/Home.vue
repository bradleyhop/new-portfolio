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
        justify="center"
        >
        <v-col class="text-center">
          <h1 class="text-h1 secondary--text font-weight-thin">
            Bradley Smith
          </h1>
        </v-col>
      </v-row>

      <v-row
        align="center"
        justify="center"
        >
        <v-col
          class="text-center"
          lg="6"
          xs="10"
          >
          <p>I am a self-taught web developer using
            <a
              href="https://freecodecamp.org/bradleyhop"
              style="color: #00641f;"
              >
              freeCodeCamp
            </a>
              as my main learning resource. I am proficient in html, css, and javascript
              while also utilizing tools like: flexbox and grid in css,
            <a
              href="https://sass-lang.com"
              style="color: #cf649a;"
              >
              Sass
            </a>
              to help me write responsive content, and
            <a
              href="https://vuejs.org"
              style="color: #41b883;"
              >
              Vue.js
            </a>
              to build webpages using
            <a href="https://cli.vuejs.org" style="color: #35495e;">
              Vue CLI
            </a>.
              I upload my work to my
            <a
              href="https://github.com/bradleyhop"
              style="color: #24292e;"
              >
              github
            </a>
              which also serves the webpages live via github pages.
          </p>

        </v-col>
      </v-row>

      <v-row>
        <v-col
          align="center"
          justify="center"
          >

          <v-img
            class="rounded-circle elevation-6"
            src="@/assets/me.jpg"
            alt="portrait of me looking confident"
            height="14em"
            width="14em"
            >
          </v-img>

        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>>
