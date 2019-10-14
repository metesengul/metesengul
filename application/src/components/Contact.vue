<template>

  <v-container class="py-12">

    <v-row justify="center"><h2 class="px-4 headline text-center">Contact me</h2></v-row>

    <v-row justify="center">

      <div style="width:450px">

        <v-card flat class="transparent mx-10 pa-0 mt-4">
          
          <v-card-actions class="px-0">
            <v-row class="px-0">
              <v-col class="px-0">
                <v-form v-model="valid">

                  <v-text-field
                    v-model="email"
                    label="Your E-mail Address"
                    :rules="emailRules"
                    required
                  ></v-text-field>

                  <v-textarea
                    label="Your Message"
                    v-model="message"
                    required
                  ></v-textarea>

                  <v-row justify="center">
                    <v-btn
                      outlined
                      class="mt-2 mb-4"
                      @click="submit"
                    >
                      Send Message
                    </v-btn>
                  </v-row>

                </v-form>

              </v-col>
            </v-row>

          </v-card-actions>
        </v-card>

      </div>

      <div>

        <v-card class="mx-xs-2 mx-sm-10 mx-md-10 pa-6 mt-10" max-width="500" elevation="4">

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="grey darken-3">mdi-phone</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>+90 507 586 6172</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="grey darken-3">mdi-map-marker</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Istanbul, TR</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-icon color="grey darken-3">mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>mustafametesengul</v-list-item-title>
                <v-list-item-title>@gmail</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>

      </div>

    </v-row>

    <v-snackbar
      v-model="snackbar"
    >
      Message Sent
      <v-btn
        class="primary"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

  </v-container>

</template>

<script>
import * as firebase from 'firebase'

export default {
  data: () => ({
    snackbar: false,
    valid: false,
    message: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    submit () {
      if (this.valid) {
        var email = this.email
        var message = this.message
        firebase.firestore().collection('messages').add({ email, message })
        this.snackbar = true
      }
    }

  }
}
</script>
