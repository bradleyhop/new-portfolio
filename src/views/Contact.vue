<script>
export default {
  name: 'Contact',
};
</script>

<template>
  <v-container class="align-start" fill-height fluid>
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
      <v-col lg="3" md="5" sm="5" xs="12" class="col-contact">
        <div class="group-contact">
          <div class="container-contact">
            <p class="link-copy">
              Email me
              <a
                href="mailto:bradleywjsmith@gmail.com"
                class="link-contact"
                title="email me"
                aria-label="Bradley's email address"
              >
                <v-icon title="email me" class="icon-contact" > mdi-email </v-icon>
              </a>
            </p>
          </div>

          <div class="container-contact">
            <p class="link-copy">
              Github
              <a
                href="https://github.com/bradleyhop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bradley's github profile"
                class="link-contact"
              >
                <v-icon title="github profile" class="icon-contact" >
                  mdi-github
                </v-icon>
              </a>
            </p>
          </div>

          <div class="container-contact">
            <p class="link-copy">
              LinkedIn
              <a
                href="https://www.linkedin.com/in/bradley-smith-328235112/"
                class="link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bradley's linked in profile"
              >
              <i class="fab fa-linkedin-in icon-contact" title="linkedin"></i>
              </a>
            </p>
          </div>

          <div class="container-contact">
            <p class="link-copy">
              freeCodeCamp.org Profile
              <a
                href="https://www.freecodecamp.org/bradleyhop"
                class="link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bradley's free code camp profile"
              >
              <i class="fab fa-free-code-camp icon-contact" title="freeCodeCamp profile"></i>
              </a>
            </p>
          </div>

          <div class="container-contact">
            <p class="link-copy">
              Wakatime
              <a
                href="https://wakatime.com/@bradleyhop"
                class="link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bradley's waka time profile"
              >
                <v-icon title="wakatime profile" class="icon-contact" >
                  mdi-timer-outline
                </v-icon>
              </a>
            </p>
          </div>
        </div>
        <!-- group-contact -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.container-contact {
  margin: 1em;
}

.copy-contact {
  font-size: 1.5em;
  text-align: center;
}

.link-copy {
  float: left;
  line-height: 3em;
  width: 100%;
}

.icon-contact {
  font-size: 3em !important;
  float: right;
  color: $secondary !important;// since fontawesome icons can't use vuetify's color property

  &:hover {
    color: $secondaryLight !important;
  }
}
</style>
