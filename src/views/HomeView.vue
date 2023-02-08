<template>
<!--  <NavigationBarLeft/>-->
  <!-- <hello-world /> -->
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
  import HelloWorld from '../components/HelloWorld.vue'
  import NavigationBarLeft from '../components/NavigationBarLeft/NavigationBarLeft.vue'
  import AboutMe from '../components/about/aboutme.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      NavigationBarLeft,
      AboutMe
      // HelloWorld,
    },
  })
</script>
<style>

</style>