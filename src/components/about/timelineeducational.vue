<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">

    <!--    FIRST CARD OF THE TIME LINE-->
    <v-timeline-item

        color="purple lighten-2"
        fill-dot
        :icon="items[1].icon"
        left
    >
      <v-card class="mr-4 card_left">
        <v-col class="pa-4">
          <div class="card_timelapse">Sep, 2015 - Feb, 2021</div>
          <div class="card_title">Ingenieria de Sistemas</div>
          <div class="card_place">UNTELS, Peru</div>
          <div class="card_content">
            Egresado de la carrera Profesional de Ingenieria de Sistemas. (tramitando el Bachiller).
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>

    <!--    SECOND CARD OF THE TIME LINE -->
    <v-timeline-item
        color="purple lighten-2"
        fill-dot
        right
        :icon="items[2].icon"
    >
      <v-card class="ml-4 card_right">
        <v-col class="pa-4">
          <div class="card_timelapse">Mar, 2008 - Dic, 2012</div>
          <div class="card_title">SECUNDARIA - CONTABILIDAD</div>
          <div class="card_place">Heroes del Alto Cenepa, Peru</div>
          <div class="card_content">
            Secundaria completa con cursos de especializacion en contabilidad, ocupando el segundo lugar de la promocion.
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>



    <!--     THIRD CARD OF THE TIME LINE -->
    <v-timeline-item
        color="purple lighten-2"
        fill-dot
        left
        :icon="items[2].icon"
    >
      <v-card class="ml-4 card_left">
        <v-col class="pa-4">
          <div class="card_timelapse">Mar, 2002 - Dic, 2007</div>
          <div  class="card_title">PRIMARIA </div>
          <div  class="card_place">Heroes del Alto Cenepa, Peru</div>
          <div  class="card_content">
            Primaria completa.
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