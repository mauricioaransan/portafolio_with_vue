<template>
<v-col>
  <div class="progress_title">
    {{ title }}
  </div>
  <v-progress-linear
      color="lime"
      :value="value"
      height="25"
      striped
  >
    <template v-slot:default="{ value }">
      <strong>{{ value }}%</strong>
    </template>
  </v-progress-linear>
</v-col>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "barComponent",
  props:{
    title:{
      type:String
    },
    value:{
      type:String
    },
  },
})
</script>

<style scoped>
.progress_title{
  margin-top: 10px;
}
</style>