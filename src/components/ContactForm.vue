<script>
import axios from 'axios';

export default {
  name: "ContactForm",

  data: () => {
    const defaultForm = Object.freeze({
      email: "",
      message: "",
      name: "",
      speaker: "",
    });

    return {
      valid: true,
      form: Object.assign({}, defaultForm),
      rules: {
        emailRules: [
          (v) => !!v || "E-mail is required",
          // regex from https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
          // isn't super robust, but good enough for our purposes here
          (v) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "E-mail must be valid",
        ],
        text: [(val) => (val || "").length > 0 || "This field is required"],
      },
      snackbar: false, // show snackbar after successful submission
      snackbarText: "Email submitted! Thank you!! ",
      timeout: 1500, // timeout for snackbar
      textBodyDefault:
        "I'm currently testing this form functionality. Please use the email link below until I've sorted the bugs out ;)",
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return this.form.email && this.form.name && this.form.message;
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.resetValidation();
    },

    // encode form data into uri
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
    },

    submit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      // this.form.speaker = this.speaker.name;
      axios.post(
        '/',
        this.encode({
          'form-name': 'contact-speaker',
          ...this.form,
        }),
        axiosConfig,
      );

      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>

<template>
  <v-container class="contact-container" fluid>
    <v-row justify="center">
      <v-col lg="6">
        <v-card>
          <!-- show snackbar when form submitted successfully -->
          <v-snackbar v-model="snackbar" absolute top right color="success" :timeout="timeout">
            {{ snackbarText }}
            <v-icon dark> mdi-checkbox-marked-circle </v-icon>
          </v-snackbar>

          <!-- using zapier.com to handle form submission trigger to send form data to my gmail -->
          <v-form
            ref="form"
            v-model="valid"
            @submit.prevent="submit"
            lazy-validation
            method="post"
            name="contact-me"
          >
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.name"
                    :rules="rules.text"
                    color="primary"
                    label="name"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    :rules="rules.emailRules"
                    label="email"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-textarea
                    v-model="form.message"
                    :rules="rules.text"
                    label="message"
                    rows="4"
                    required
                  >
                    <template v-slot:label>
                      <div>{{ textBodyDefault }}</div>
                    </template>
                  </v-textarea>
                </v-col>
              </v-row>
            </v-container>

            <v-card-actions>
              <v-btn @click="resetForm" color="secondaryLight" type="reset"> Reset </v-btn>
              <v-spacer></v-spacer>
              <v-btn :disabled="!formIsValid" color="secondary" type="submit"> Submit </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.contact-container {
  margin: 2rem 0;
}
</style>
