<script>
// mdi icons used in snackbars
import { mdiCheckboxMarkedCircle } from "@mdi/js";
import { mdiAlertCircleOutline } from "@mdi/js";

export default {
  name: "ContactForm",

  data: () => {
    const defaultForm = Object.freeze({
      email: "",
      message: "",
      name: "",
    });

    return {
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
      textBodyDefault: "message",
      defaultForm, // form object
      snackbar: false, // show snackbar after form submission
      textSnackbar: "",
      colorSnackbar: "",
      iconSnackbar: "",
      timeout: 2500, // timeout for snackbar
      // mdi icons
      mdiAlertCircleOutline,
      mdiCheckboxMarkedCircle,
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
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    submit() {
      // we'er using Netlify to handle form submission; here's their article on doing so with Vue:
      // https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-me",
          ...this.form,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          } else {
            this.snackbar = true;
            this.colorSnackbar = "success";
            this.iconSnackbar = mdiCheckboxMarkedCircle;
            this.textSnackbar = "Form submitted! Thank you!! ";
          }
        })
        .catch((error) => {
          this.snackbar = true;
          this.colorSnackbar = "error";
          this.iconSnackbar = mdiAlertCircleOutline;
          this.textSnackbar = "Error! Form not submitted: ";
          this.textSnackbar += error;
        });

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
          <v-snackbar
            v-model="snackbar"
            absolute
            top
            right
            :color="colorSnackbar"
            :timeout="timeout"
          >
            <v-icon dark> {{ iconSnackbar }} </v-icon>
            {{ textSnackbar }}
          </v-snackbar>

          <!-- node dummy form in public/index.html so that Netlify can handle this form -->
          <!-- using zapier.com to handle form submission trigger to send form data to my gmail -->
          <v-form
            ref="form"
            @submit.prevent="submit"
            name="contact-me"
            method="post"
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
              <v-btn @click="resetForm" color="secondaryLight" type="reset">
                Reset
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!formIsValid"
                color="secondary"
                type="submit"
                class="black--text"
              >
                Submit
              </v-btn>
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
