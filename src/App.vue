<template>
  <v-app>
    
    <v-app-bar
      app
      height=50
      color="grey darken-4"
    >
      <img class="mr-3" :src="require('@/assets/metesengul.png')" height="40"/>
      <v-toolbar-title>Mete Şengül</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Home></Home>
    </v-content>

    <v-footer>
      <v-col
        class="text-center"
        cols="12"
      >
        <v-btn href="https://github.com/metesengul" class="grey--text" text small><v-icon left dark small>mdi-github</v-icon>GitHub</v-btn>
        <v-btn href="https://www.linkedin.com/in/metesengul/" class="accent--text" text small><v-icon left dark small>mdi-linkedin</v-icon>LinkedIn</v-btn>
        <v-btn href="https://drive.google.com/file/d/10eHJebk5UNwbkhCFx2emYCBU5WnXJvWm/view?usp=sharing" class="primary--text" text small><v-icon left dark small>mdi-account</v-icon>Resume</v-btn> 
        <br>
        <v-icon small class="mr-1">mdi-email</v-icon>mustafametesengul@gmail.com
        <br>
        <v-icon small class="mr-1">mdi-map-marker</v-icon>Istanbul, Turkey
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>
  import Home from '@/components/Home'

  export default {
    props: {
      source: String,
    },
    components: {
      Home
    },
    data: () => ({
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>