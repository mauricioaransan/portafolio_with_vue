<template>
<v-container>
  <h1>Acerca de mí</h1>
  <div class="under_line_title"></div>
  <div id="about">
Tale adolescens faucibus pertinax vero. Quis nisl iriure putent animal.
    Consequat iudicabit senserit agam noluisse montes facilisi dictum hendrerit sit.
    Molestiae constituto pertinax nunc vituperata fringilla explicari persius.
    Ponderum convenire bibendum autem facilis mediocritatem vocibus. Eos mus nullam postulant mea nisi dicam euripidis aptent.
    Augue recteque risus wisi mediocrem prodesset.  </div>

  <v-row class="ma-0 mt-5">
    <v-btn color="red">
      Descarga CV
    </v-btn>
  </v-row>

  <v-sheet
      id="experiencie"
      class="ma-0 mt-8"
      elevation="8"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        mandatory
        show-arrows
    >
      <v-slide-item
          v-for="(item,i) in items"
          :key="i"
          v-slot="{ active, toggle }"
      >
        <v-btn
            :color="active ? 'primary' : 'grey lighten-1'"
            @click="toggle"
        >
          {{item.title}}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
<!--        ANIMAR LAS CARDS CON LO DEL VUETIFY-->
    <v-expand-transition>
      <v-sheet
          v-if="model === 0"
          tile
      >
        <TimeLineExperience/>
      </v-sheet>
      <v-sheet
          v-if="model === 1"
          tile
      >
        <TimeLineEducational/>
      </v-sheet>
      <v-sheet
          v-if="model === 2"
          tile
      >
        <TimeLineAdditional/>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>


  <v-sheet
      id="skills"
  >
    <Skills/>
  </v-sheet>





  <v-sheet>
    <ContactMe/>
  </v-sheet>
</v-container>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import TimeLineEducational from "@/components/about/timelineeducational.vue";
import TimeLineAdditional from "@/components/about/timelineaditional.vue";
import TimeLineExperience from "@/components/about/timelineexperience.vue";
import Skills from "@/components/skill/skills.vue";
import ContactMe from "@/components/contactme/contactme.vue";

export default defineComponent({
  name: "aboutme",
  components:{
    TimeLineEducational,
    TimeLineAdditional,
    TimeLineExperience,
    Skills,
    ContactMe,
  },
  setup(){
  const model = ref(0)
  const items = ref([
    {title: 'Experiencia'},
    {title: 'Educacion'},
    {title: 'Adicional'},
  ])

    return{
    model,items
    }
  }
})
</script>

<style scoped>
.under_line_title{
  width: 100px;
  height: 10px;
  color: red;
  padding-top: 15px;
  padding-bottom: 15px;
}


.experience_card{
  transition: 2s;
}
</style>