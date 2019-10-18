<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-subheader><v-icon left>mdi-laptop</v-icon>Web Applications</v-subheader>
        <v-list-item href="https://metesengul-iris-classification.web.app/">
          <v-list-item-content>
            <v-list-item-title>Iris Classification</v-list-item-title>
            <v-list-item-subtitle>Flask & Vue</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-subheader><v-icon left>mdi-notebook-outline</v-icon>Notebooks</v-subheader>

        <v-list-item href="https://colab.research.google.com/drive/1GNGpq5KxjIBqCE9lQWZo2jpfg0dnjJ2L">
          <v-list-item-content>
            <v-list-item-title>MNIST Classification</v-list-item-title>
            <v-list-item-subtitle>Convolutional networks</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://colab.research.google.com/drive/1N3He3BxOW6qyWTHbib2YmvdCrNllztW9">
          <v-list-item-content>
            <v-list-item-title>IMDB Sentiment Analysis</v-list-item-title>
            <v-list-item-subtitle>Recurrent networks</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        

        <v-list-item href="https://colab.research.google.com/drive/1t-1-bULaPG5uEhj6-3SMHzUj1OZ91SWS">
          <v-list-item-content>
            <v-list-item-title>Jazz Music Generation</v-list-item-title>
            <v-list-item-subtitle>LSTM networks</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://colab.research.google.com/drive/1JvDb2IlS1f863J2BJTjr5oQ7e0h7Lv5M">
          <v-list-item-content>
            <v-list-item-title>House Price Estimation</v-list-item-title>
            <v-list-item-subtitle>Dense networks</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://colab.research.google.com/drive/1Vw2IHmoLWRjUUnrK2RleZwBGSmHjIdZS">
          <v-list-item-content>
            <v-list-item-title>Iris Classification</v-list-item-title>
            <v-list-item-subtitle>Dense networks</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-subheader><v-icon left>mdi-link</v-icon>Other</v-subheader>

        <v-list-item href="https://play.google.com/store/apps/details?id=com.studiophi.grid">
          <v-list-item-content>
            <v-list-item-title>Grid</v-list-item-title>
            <v-list-item-subtitle>Mobile puzzle game</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://github.com/metesengul/synaptic">
          <v-list-item-content>
            <v-list-item-title>Synaptic</v-list-item-title>
            <v-list-item-subtitle>Deep learning library for Python</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://github.com/metesengul/sheet">
          <v-list-item-content>
            <v-list-item-title>Sheet</v-list-item-title>
            <v-list-item-subtitle>Midi processing script</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      elevate-on-scroll
      height="70"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mete Şengül</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
}
</script>
