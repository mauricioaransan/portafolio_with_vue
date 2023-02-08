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
          <div class="card_timelapse">feb, 2022 - Feb, 2022</div>
          <div class="card_title">macros y VBA</div>
          <div class="card_place">UDEMY</div>
          <div class="card_content">
            Curso para potenciar mis conocimientos en Excel VBA.
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
          <div class="card_timelapse">nov, 2021 - ene, 2022</div>
          <div class="card_title">universidad JAVA</div>
          <div class="card_place">UDEMY</div>
          <div class="card_content">
            Curso que llevé virtualmente, donde pude ver programación web en lenguaje JAVA, además de ver Springboot y Angular.
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
          <div class="card_timelapse">set, 2021 - oct, 2021</div>
          <div  class="card_title">HTML, CSS & JavaScript </div>
          <div  class="card_place">UDEMY</div>
          <div  class="card_content">
            Curso dedicado a saber los conceptos necesarios acerca de HTML, CSS & JS.
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
          <div class="card_timelapse">ago, 2021 - ago, 2022</div>
          <div class="card_title">microsoft office</div>
          <div class="card_place">UDEMY</div>
          <div class="card_content">
            Curso donde se vio hasta un nivel intermedio Microsoft Office Word, Excel y Power Point.
          </div>
        </v-col>
      </v-card>
    </v-timeline-item>


<!--    FIVETH CARD OF THE TIME LINE-->
    <v-timeline-item
        color="purple lighten-2"
        fill-dot
        :icon="items[2].icon"
    >
      <v-card class="ml-4 card_right">
        <v-col class="pa-4">
          <div class="card_timelapse">set, 2020 - feb, 2021</div>
          <div  class="card_title">flutter & dart</div>
          <div  class="card_place">UDEMY & youtube</div>
          <div  class="card_content">
            Curso en el que aprendí un lenguaje de programación para el desarrollo de aplicaciones móviles.
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