<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
        v-for="(item,id) in items"
        :key="id"
        :color="item.color"
        fill-dot
        :icon="item.icon"
    >
      <v-card class="mr-4 time_line_card" >
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
        timelapse :     'abr, 2022 - oct, 2022',
        title:          'Vue2 - Vue3',
        place:          'UDEMY',
        content:        'Curso en el que vi los fundamentos de Vue 2 & Vue 3, usando Composition API y Option API & VueX'
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-file-document-outline',
        timelapse :     'feb, 2022 - Feb, 2022',
        title:          'macros y VBA',
        place:          'UDEMY',
        content:        'Curso para potenciar mis conocimientos en Excel VBA.'
      },
      {
        color:          '#003785',
        icon:           'mdi-star-box-outline',
        timelapse :     'nov, 2021 - ene, 2022',
        title:          'universidad JAVA',
        place:          'UDEMY',
        content:        'Curso que llevé virtualmente, donde pude ver programación web en lenguaje JAVA, además de ver Springboot y Angular.'
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-star-box-outline',
        timelapse :     'set, 2021 - oct, 2021',
        title:          'HTML, CSS & JavaScript',
        place:          'UDEMY',
        content:        'Curso dedicado a saber los conceptos necesarios acerca de HTML, CSS & JS.'
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-file-document-outline',
        timelapse :     'ago, 2021 - set, 2021',
        title:          'microsoft office',
        place:          'UDEMY',
        content:        'Curso donde se vio hasta un nivel intermedio Microsoft Office Word, Excel y Power Point.'
      },
      {
        color:          '#81c9fa',
        icon:           'mdi-file-document-outline',
        timelapse :     'set, 2020 - feb, 2021',
        title:          'flutter & dart',
        place:          'UDEMY & youtube',
        content:        'Curso en el que aprendí un lenguaje de programación para el desarrollo de aplicaciones móviles para Android y IOs.'
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