<template>
  <v-sheet id="skills">
    <h1 class="port_title">Habilidades</h1>
    <v-row class="ma-4">
      <v-col cols="6">
        <BarComponent
            v-for="(item,i) in itemsleft"
            :key="i"
            :title="item.title"
            :value="item.value"
            :color="item.color"
        />
      </v-col>
      <v-col cols="6">
        <BarComponent
            v-for="(item,i) in itemsright"
            :key="i"
            :title="item.title"
            :value="item.value"
            :color="item.color"
        />
      </v-col>

    </v-row>
  </v-sheet>

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
      {title:'HTML',        value:'90',   color:'#0D47A1'},
      {title:'CSS',         value:'75',   color:'#1565C0'},
      {title:'VUE',         value:'65',   color:'#1976D2'},
      {title:'JavaScript',  value:'50',   color:'#1E88E5'},
      {title:'TypeScript',  value:'50',   color:'#1E88E5'},
    ]);

    const itemsright = ref([
      {title:'Informix',    value:'60',   color:'#1976D2'},
      {title:'Flutter',     value:'50',   color:'#1E88E5'},
      {title:'GIT',         value:'40',   color:'#42A5F5'},
      {title:'Java Web',    value:'40',   color:'#42A5F5'},
    ])


    return{
      itemsleft,itemsright
    }
  }
})
</script>

<style scoped>
.port_title{
  text-transform: uppercase;
  margin-top: 25px;
}
</style>