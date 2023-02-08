<template>
<v-row class="ma-4">
  <v-col cols="6">
    <BarComponent
    v-for="(item,i) in itemsleft"
    :key="i"
    :title="item.title"
    :value="item.value"
    />
  </v-col>
  <v-col cols="6">
    <BarComponent
        v-for="(item,i) in itemsright"
        :key="i"
        :title="item.title"
        :value="item.value"
    />
  </v-col>

</v-row>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import BarComponent from "@/components/skill/barComponent.vue";

export default defineComponent({
  name: "skills",
  components:{
    BarComponent
  },
  setup(){
    const itemsleft = ref([
      {title:'HTML',        value:'90'},
      {title:'CSS',         value:'75'},
      {title:'JavaScript',  value:'60'},
      {title:'VUE',         value:'60'},
      {title:'TypeScript',  value:'60'},
    ]);

    const itemsright = ref([
      {title:'Informix',    value:'60'},
      {title:'Flutter',     value:'60'},
      {title:'GIT',         value:'40'},
      {title:'Java Web',    value:'40'},
    ])


    return{
      itemsleft,itemsright
    }
  }
})
</script>

<style scoped>

</style>