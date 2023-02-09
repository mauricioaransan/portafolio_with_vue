<template>
  <v-row>
    <v-col cols="3">
      <NavigationBarLeft/>
    </v-col>
    <v-col cols="9">
      <about-me/>
    </v-col>

  </v-row>

</template>

<script lang="ts">
  import Vue from 'vue'
  import NavigationBarLeft from '../components/NavigationBarLeft/NavigationBarLeft.vue'
  import AboutMe from '../components/about/aboutme.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      NavigationBarLeft,
      AboutMe
    },
  })
</script>
<style>
  .v-item-group{
    max-width: fit-content !important;
    margin: 0 auto;
  }
</style>