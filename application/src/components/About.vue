<template>

  <v-container class="pt-4 pb-6">

    <v-row justify="center">

      <div>

        <v-card flat class="transparent mx-6 py-6 pa-sm-6 pa-xs-0" max-width="450">
          <v-card-title class="justify-center">
            Hello, I'm Mete
          </v-card-title>
          <v-card-text class="black--text">
            I create machine learning microservices for corporates, startups, and individuals.
            <br><br>
            The microservice architecture enables machine learning models to be part of your application using simple APIs.
            <br><br>
            These services are independently deployable, highly maintainable and scalable.
          </v-card-text>
        </v-card>

      </div>

      <div>

        <v-card class="mx-6 py-6 px-10" width="250" elevation="4">
          <v-card-title class="justify-center">
            Links
          </v-card-title>
          <v-card-actions>
            <v-row>
              <v-col>

              <v-row justify="center">
                <v-btn class="ma-2" outlined href="https://github.com/metesengul">
                  <v-icon left dark small>mdi-github-circle</v-icon>
                  Github
                </v-btn>
              </v-row>

              <v-row justify="center">
                <v-btn color="indigo" class="ma-2" outlined href="https://www.linkedin.com/in/metesengul/">
                  <v-icon left dark small>mdi-linkedin</v-icon>
                  LinkedIn
                </v-btn>
              </v-row>

              <v-row justify="center">
                <v-btn color="blue" class="ma-2" outlined href="https://drive.google.com/file/d/10eHJebk5UNwbkhCFx2emYCBU5WnXJvWm/view?usp=sharing">
                  <v-icon left dark small>mdi-account</v-icon>
                  Resume
                </v-btn>
              </v-row>

              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>

      </div>

    </v-row>

  </v-container>

</template>

<script>
export default {
  data: () => ({

  })
}
</script>
