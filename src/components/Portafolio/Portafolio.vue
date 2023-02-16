<template>
  <v-sheet id="portfolio" >
    <h1>portaFOLIO</h1>
    <v-row>
      <v-col cols="4" v-for="item in 6">
        <v-sheet height="150" width="100%" color="red">
          proyecto n° {{ item }}
        </v-sheet>
      </v-col>

    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ( {
  name: "Portafolio"
})
</script>

<style scoped>

</style>