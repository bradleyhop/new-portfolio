<script>
import PageHeader from "@/components/PageHeader.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Contact",
  components: {
    PageHeader,
    ContactForm,
  },
};
</script>

<template>
  <v-container class="align-start contact-container" fill-height fluid>
    <PageHeader headerText="Contact" />

    <v-row justify="center">
      <h1 class="mx-1 text-center"><i>Am I the Team Member You're Looking For?</i></h1>
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
            <span class="fab fa-github icon-contact"></span>
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
            <span class="fab fa-linkedin-in icon-contact"></span>
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
            <span class="fab fa-free-code-camp icon-contact"></span>
            FreeCodeCamp
          </v-btn>
        </a>

        <a
          href="https://wakatime.com/@bradleyhop"
          target="_blank"
          title="WakaTime"
          rel="noopener noreferrer"
          aria-label="Bradley's waka time profile"
        >
          <v-btn large color="#527da4" class="white--text mb-4" elevation="6">
            <span class="fas fa-stopwatch icon-contact"></span>
            WakaTime
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
</style>
