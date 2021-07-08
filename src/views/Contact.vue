<script>
export default {
  name: 'Contact',
};
</script>

<template>
  <v-container class="align-start contact-container" fill-height fluid>
    <v-row>
      <v-col class="page-title"> CONTACT </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p class="copy-contact" title="hint: yes!">
          <i>Am I the team member you're looking for?</i>
        </p>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-col cols="12" lg="4" sm="6" class="col-contact">
        <div class="group-contact">
          <div class="link-container">
            <a
              href="mailto:bradleywjsmith@gmail.com"
              class="link-contact"
              title="email me"
              aria-label="Bradley's email address"
            >
              <p class="link-copy">
                Email me
                <i class="far fa-envelope icon-contact"></i>
              </p>
            </a>
          </div>

          <div class="link-container">
            <a
              href="https://github.com/bradleyhop"
              class="link-contact"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
              aria-label="Bradley's GitHub profile"
            >
              <p class="link-copy">
                GitHub
                <i class="fab fa-github icon-contact"></i>
              </p>
            </a>
          </div>

          <div class="link-container">
            <a
              href="https://www.linkedin.com/in/bradley-smith-328235112/"
              class="link-contact"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
              aria-label="Bradley's LinkedIn profile"
            >
              <p class="link-copy">
                LinkedIn
                <i class="fab fa-linkedin-in icon-contact"></i>
              </p>
            </a>
          </div>

          <div class="link-container">
            <a
              href="https://www.freecodecamp.org/bradleyhop"
              class="link-contact"
              target="_blank"
              title="freeCodeCamp"
              rel="noopener noreferrer"
              aria-label="Bradley's free code camp profile"
            >
              <p class="link-copy">
                freeCodeCamp
                <i class="fab fa-free-code-camp icon-contact"></i>
              </p>
            </a>
          </div>

          <div class="link-container">
            <a
              href="https://wakatime.com/@bradleyhop"
              class="link-contact"
              target="_blank"
              title="WakaTime"
              rel="noopener noreferrer"
              aria-label="Bradley's waka time profile"
            >
              <p class="link-copy">
                WakaTime
                <i class="fas fa-stopwatch icon-contact"></i>
              </p>
            </a>
          </div>
        </div>
        <!-- group-contact -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.contact-container {
  background-color: $not-purple;
}

.link-contact {
  color: #000 !important;

  &:hover {
    color: #fff !important;
  }
}

.copy-contact {
  font-size: 1.5em;
  text-align: center;
}

.link-copy {
  float: left;
  font-size: 1.5em;
  line-height: 3em;
  width: 100%;
}

.icon-contact {
  font-size: 2em;
  vertical-align: middle;
  float: right;
}
</style>
