<script>
import PageHeader from "@/components/PageHeader.vue";
import ContactForm from "@/components/ContactForm.vue";
// load icons
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiFire } from "@mdi/js";

export default {
  name: "Contact",
  components: {
    PageHeader,
    ContactForm,
  },

  data: () => ({
    // mdi icons
    mdiGithub,
    mdiLinkedin,
    mdiFire,
  }),
};
</script>

<template>
  <v-container class="align-start contact-container" fill-height fluid>
    <PageHeader headerText="Contact" />

    <v-row justify="center">
      <h2 class="mx-1 text-center">Am I the Team Member You're Looking For?</h2>
    </v-row>

    <ContactForm />

    <v-row justify="center">
      <v-col lg="6" class="d-flex justify-space-around flex-wrap">
        <a
          href="https://github.com/bradleyhop"
          target="_blank"
          title="Bradley's GitHub Profile"
          rel="noopener noreferrer"
          aria-label="Bradley's GitHub profile"
        >
          <v-btn large color="#f5f5f5" class="mb-4" elevation="6">
            <v-icon>{{ mdiGithub }}</v-icon>
            GitHub
          </v-btn>
        </a>

        <a
          href="https://www.linkedin.com/in/bradley-smith-328235112/"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
          aria-label="Bradley's LinkedIn profile"
        >
          <v-btn large color="#0077b5" class="white--text mb-4" elevation="6">
            <v-icon>{{ mdiLinkedin }}</v-icon>
            LinkedIn
          </v-btn>
        </a>

        <a
          href="https://www.freecodecamp.org/bradleyhop"
          target="_blank"
          title="freeCodeCamp"
          rel="noopener noreferrer"
          aria-label="Bradley's free code camp profile"
        >
          <v-btn large color="#006400" class="white--text mb-4" elevation="6">
            <!-- more home-made freeCodeCamp icon magic  -->
            &nbsp;<span class="paren-size">&lpar;</span>
            <v-icon class="fcc-icon">{{ mdiFire }}</v-icon>
            <span class="paren-size">&rpar;</span>
            <span class="fcc-margin"></span>
            FreeCodeCamp
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.contact-container {
  background-color: $not-purple;
}

.icon-contact {
  font-size: 1.5em;
  margin-right: 0.5rem;
  vertical-align: middle;
}

.paren-size {
  font-size: 1.25rem;
}

.fcc-icon {
  transform: scaleX(-1);
  margin-left: -4px;
  margin-right: -4px;
}
</style>
