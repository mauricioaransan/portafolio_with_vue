<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">

    <!--    FIRST CARD OF THE TIME LINE-->
    <v-timeline-item
        color="purple lighten-2"
        fill-dot
        :icon="items[1].icon"
    >
      <v-card class="mr-4 card_right">
        <v-col class="pa-4">
          <div class="card_timelapse">mar, 2022 - ene, 2023</div>
          <div class="card_title">desarrollador frontend junior</div>
          <div class="card_place">DEISTER SOFTWARE PERU</div>
          <div class="card_content">
            Encargado del desarrollo de paginas web (meter mas floro)
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>


    <!--    SECOND CARD OF THE TIME LINE -->
    <v-timeline-item
        color="purple lighten-2"
        fill-dot
        :icon="items[2].icon"
    >
      <v-card class="ml-4 card_left">
        <v-col class="pa-4">
          <div class="card_timelapse">dic, 2021 - ene, 2022</div>
          <div class="card_title">ayudante de programacion</div>
          <div class="card_place">encode solutions, peru</div>
          <div class="card_content">
            Ayudé en el programado de los equipos BMS para el proyecto LAP,
            el cual se encarga de la supervisión y monitoreo de varios sistemas dentro de una edificación.
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>


    <!--     THIRD CARD OF THE TIME LINE -->
    <v-timeline-item
        color="purple lighten-2"
        fill-dot
        :icon="items[2].icon"
    >
      <v-card class="ml-4 card_right">
        <v-col class="pa-4">
          <div class="card_timelapse">may, 2021 - mar, 2022</div>
          <div  class="card_title">tecnico instalador</div>
          <div  class="card_place">encode solutions, peru</div>
          <div  class="card_content">
            Técnico encargado en el canalizado, cableado, instalación y monitoreo de los distintos dispositivos en el Sistema de Alarma contra Incendios.
            También encargado del mantenmiento e instalación de los dispositivos de CCTV.
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>



    <!--    FOURTH CARD OF THE TIME LINE -->
    <v-timeline-item
        color="purple lighten-2"
        fill-dot
        :icon="items[2].icon"
    >
      <v-card class="ml-4 card_left">
        <v-col class="pa-4">
          <div class="card_timelapse">feb, 2018 - feb, 2020</div>
          <div class="card_title">asesor de ventas</div>
          <div class="card_place">SODIMAC</div>
          <div class="card_content">
            Responsable de brindar la correcta asesoría a los clientes en el área de iluminación y electricidad.
            También encargado de la instalación de las exhibiciones y equipos.
            Además, veía el control y seguimiento de los productos mediante kardex.
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
        color: 'red lighten-2',
        icon: 'mdi-star',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ])

    return{
      items
    }
  }
})
</script>

<style scoped>

.card_left{
  text-align: end;
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