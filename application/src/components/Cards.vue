<template>

  <v-container class="py-6 mt-6">

    <v-row justify="center"><h2 class="px-4 headline text-center">{{title}}</h2></v-row>

    <v-row justify="center"><p class="px-4 text-center">{{subtitle}}</p></v-row>

    <v-row justify="center">
      <div  v-for="item in items" :key="item.title" >

        <v-card class="ma-4 pa-8" max-width="380" raised="true">
          <v-card-text v-if="item.icon" class="text-center">
            <v-icon x-large :class="item.color">{{item.icon}}</v-icon>
          </v-card-text>
          <v-card-title class="justify-center">
            {{item.title}}
          </v-card-title>
          <v-card-text>
            {{item.text}}
          </v-card-text>
          <v-card-actions v-if="item.link">
            <v-row justify="center">
              <v-btn
                :href="item.link.href"
                outlined
                class="my-2"
              >
                {{item.link.text}}
              </v-btn>
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

  }),
  props: ['items', 'title', 'subtitle']
}
</script>
