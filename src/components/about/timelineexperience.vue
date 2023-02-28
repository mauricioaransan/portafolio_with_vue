<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">

    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :color="item.color"
        fill-dot
        :icon="item.icon"
    >
      <v-card class="mx-4 time_line_card">
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
        color:          '#003785',
        icon:           'mdi-star-box-outline',
        timelapse :     'mar, 2022 - ene, 2023',
        title:          'desarrollador frontend junior',
        place:          'DEISTER SOFTWARE PERU',
        content:        ' Encargado del desarrollo de paginas web (meter mas floro)'
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-briefcase-outline',
        timelapse :     'mar, 2022 - ene, 2023',
        title:          'ayudante de programacion',
        place:          'encode solutions, peru',
        content:        'Ayudé en el programado de los equipos BMS para el proyecto LAP el cual se encarga de la supervisión y monitoreo de varios sistemas dentro de una edificación'
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-briefcase-outline',
        timelapse :     'may, 2021 - mar, 2022',
        title:          'tecnico instalador',
        place:          'encode solutions, peru',
        content:        'Técnico encargado en el canalizado, cableado, instalación y monitoreo de los distintos dispositivos en el Sistema de Alarma contra Incendios.\n' +
            '            También encargado del mantenmiento e instalación de los dispositivos de CCTV.'
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-briefcase-outline',
        timelapse :     'feb, 2018 - feb, 2020',
        title:          'asesor de ventas',
        place:          'SODIMAC',
        content:        'Responsable de brindar la correcta asesoría a los clientes en el área de iluminación y electricidad.\n' +
            '            También encargado de la instalación de las exhibiciones y equipos.\n' +
            '            Además, veía el control y seguimiento de los productos mediante kardex'
      },

    ])

    return{
      items
    }
  }
})
</script>

<style scoped>
.time_line_card{
  border-radius: 20px!important;
}

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
  text-transform: uppercase;
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