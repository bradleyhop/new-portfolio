<script>
import PageHeader from '@/components/PageHeader.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    PageHeader,
    ContactForm,
  },
};
</script>

<template>
  <v-container class="align-start contact-container" fill-height fluid>

    <PageHeader
      headerText="Contact"
    />

    <ContactForm />

    <v-row>
      <v-col>
        <p class="copy-contact" title="hint: yes!">
          <i>Find me around the 'net</i>
        </p>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-col cols="10" lg="3" sm="4" class="col-contact">
        <div class="group-contact">

          <!--
             - <div class="link-container">
             -   <a
             -     href="mailto:bradleywjsmith@gmail.com"
             -     class="link-contact"
             -     title="email me"
             -     aria-label="Bradley's email address"
             -   >
             -   <div class="link-hover">
             -     <span class="link-copy">
             -       Email me
             -     </span>
             -     <span class="far fa-envelope icon-contact"></span>
             -   </div>
             -   </a>
             - </div>
             -->

          <div class="link-container">
            <a
              href="https://github.com/bradleyhop"
              class="link-contact"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
              aria-label="Bradley's GitHub profile"
            >
            <div class="link-hover">
              <span class="link-copy">
                GitHub
              </span>
              <span class="fab fa-github icon-contact"></span>
            </div>
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
            <div class="link-hover">
              <span class="link-copy">
                LinkedIn
              </span>
              <span class="fab fa-linkedin-in icon-contact"></span>
            </div>
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
            <div class="link-hover">
              <span class="link-copy">
                freeCodeCamp
              </span>
              <span class="fab fa-free-code-camp icon-contact"></span>
            </div>
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
            <div class="link-hover">
              <span class="link-copy">
                WakaTime
              </span>
              <span class="fas fa-stopwatch icon-contact"></span>
            </div>
            </a>
          </div>
        </div>
        <!-- group-contact -->
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.contact-container {
  background-color: $not-purple;
}

.copy-contact {
  font-family: $Source-Sans-Pro;
  font-size: 1.75rem;
  text-align: center;
}

.link-container {
  display: inline-block;
  margin-bottom: 1rem;
  width: 100%;
}

.link-contact {
  color: #000 !important;

  &:hover {
    color: #fff !important;
  }
}

.link-copy {
  font-size: 1.5em;
  width: 100%;
}

.icon-contact {
  float: right;
  font-size: 2em;
  vertical-align: middle;
}
</style>
