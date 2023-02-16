<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :color="item.color"
        fill-dot
        :icon="item.icon"
        :left="id===1"
        :right="id===0 || id === 2"
    >
      <v-card class="mx-4">
        <v-col class="pa-4">
          <div class="card_timelapse">{{ item.timelapse }}</div>
          <div class="card_title">{{ item.title }}</div>
          <div class="card_place">{{ item.place }}</div>
          <div class="card_content">
            {{ item.content }}
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "timelineaditional",
  setup(){
    const items = ref([
      {
        color:          'purple lighten-2',
        icon:           'mdi-star-box-outline',
        timelapse :     'Sep, 2015 - Feb, 2021',
        title:          'Ingenieria de Sistemas',
        place:          'UNTELS, Peru',
        content:        'Egresado de la carrera Profesional de Ingenieria de Sistemas. (tramitando el Bachiller).'
      },
      {
        color:          'red lighten-2',
        icon:           'mdi-file-document-outline',
        timelapse :     'Mar, 2008 - Dic, 2012',
        title:          'SECUNDARIA - CONTABILIDAD',
        place:          'Heroes del Alto Cenepa, Peru',
        content:        'Secundaria completa con cursos de especializacion en contabilidad, ocupando el segundo lugar de la promocion.'
      },
      {
        color:          'red lighten-2',
        icon:           'mdi-file-document-outline',
        timelapse :     'Mar, 2002 - Dic, 2007',
        title:          'PRIMARIA',
        place:          'Heroes del Alto Cenepa, Peru',
        content:        'Primaria completa.'
      },
    ])

    return{
      items
    }
  }
})
</script>

<style scoped>

.card_timelapse{
  color: #149ddd;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 17px;
}
.card_title{
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 700;
  color: black;
  margin-bottom: 5px;
}
.card_place{
  font-size: 16px;
  font-style: italic;
  color: grey;
  margin-bottom: 10px;
}
.card_content{
  font-size: 16px;
  color: gray;
  line-height: 26px;
  text-align: justify;
  /**
  this is to generate hyphens in the words
   */
  hyphens: auto;
}
</style>