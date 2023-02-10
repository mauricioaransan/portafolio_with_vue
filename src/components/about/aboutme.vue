<template>
<v-sheet>
  <v-card
      height="100vh"
      color="#008000"
      id="home"
      elevation="0"
      class="d-flex align-center"
      img="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
  >
    <v-col class="d-flex justify-center " cols="12">
      <div class="container_animation">
        <span class="text first_text"> Desarrollador </span>
        <typewriter
            :replace="replace"
            :type-interval="200"
            :replace-interval="1000"
        >
          <span class="text typed-text"> {{text_typed}}</span>
        </typewriter>
      </div>
<!--      <h2>Mauricio Arancibia Sanchez</h2>-->
<!--      <div class="container_animation">-->
<!--        <span class="text first_text"> Desarrollador</span>-->
<!--        <span class="text typed-text"> {{text_typed}}</span>-->
<!--        <span class="cursor">&nbsp;</span>-->
<!--      </div>-->
    </v-col>


  </v-card>
  <v-sheet id="about">
    <h1>Acerca de mí</h1>
    <div class="under_line_title"></div>
    <v-row >
      <v-col md="5" lg="6" xl="6">
        Tale adolescens faucibus pertinax vero. Quis nisl iriure putent animal.
        Consequat iudicabit senserit agam noluisse montes facilisi dictum hendrerit sit.
        Molestiae constituto pertinax nunc vituperata fringilla explicari persius.
        Ponderum convenire bibendum autem facilis mediocritatem vocibus. Eos mus nullam postulant mea nisi dicam euripidis aptent.
        Augue recteque risus wisi mediocrem prodesset.
      </v-col>

      <v-col md="7" lg="6" xl="6" >
        <h4>Personal Info</h4>
        <v-row>
          <v-col cols="6">
           <div> <span class="personal_info_header"> Nombre </span> <span class="personal_info_info"> Mauricio Arancibia</span> </div>
           <div> <span class="personal_info_header"> Edad </span> <span class="personal_info_info"> 26 años</span> </div>
           <div> <span class="personal_info_header"> Email </span> <span class="personal_info_info"> mauricioaransan@gmail.com</span> </div>
           <div> <span class="personal_info_header"> Dirección </span> <span class="personal_info_info"> Villa el Salvador - Lima </span> </div>
          </v-col>
          <v-col cols="6">
            <div> <span class="personal_info_header"> Habilidad </span> <span class="personal_info_info"> Front-End</span> </div>
            <div> <span class="personal_info_header"> Experiencia </span> <span class="personal_info_info"> 1 año</span> </div>
            <div> <span class="personal_info_header"> Lenguajes </span> <span class="personal_info_info"> Español / Ingles (escrito)</span> </div>
            <div> <span class="personal_info_header"> FreeLance </span> <span class="personal_info_info"> Disponible </span> </div>
          </v-col>
        </v-row>
        <v-row class="ma-0 mt-5">
          <v-btn color="red">
            Descarga CV
          </v-btn>
        </v-row>
      </v-col>
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
  </v-sheet>


  <Portafolio/>

  <v-sheet
      id="skills"
  >
    <Skills/>
  </v-sheet>





  <v-sheet>
    <ContactMe/>
  </v-sheet>
</v-sheet>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import TimeLineEducational from "@/components/about/timelineeducational.vue";
import TimeLineAdditional from "@/components/about/timelineaditional.vue";
import TimeLineExperience from "@/components/about/timelineexperience.vue";
import Skills from "@/components/skill/skills.vue";
import ContactMe from "@/components/contactme/contactme.vue";
import Portafolio from "@/components/Portafolio/Portafolio.vue";
import Typewriter from "@/components/tipper.vue"

export default defineComponent({
  name: "aboutme",
  components:{
    Portafolio,
    TimeLineEducational,
    TimeLineAdditional,
    TimeLineExperience,
    Skills,
    ContactMe,
    Typewriter
  },

  setup(){
  const model = ref(0);
  const items = ref([
    {title: 'Experiencia'},
    {title: 'Educacion'},
    {title: 'Adicional'},
  ]);
  const time      = ref(2)
  const text_typed = ref('Front-End');

  const  replace=  ref([
        { from: "Front-End", to: "Back-End" },
        { from: "Back-End", to: "Front-End" },
        { from: "Front-End", to: "Back-End" },
      ])

  onMounted(()=>{
    setInterval(()=>{
      if(time.value === 2 ){
        text_typed.value = 'Back-End'
      }
      if(time.value === 1 ){
        text_typed.value = 'Front-End'
        return time.value  = 2
      }
      time.value -= 1
    },4000)
  })
    return{
    model,items,text_typed,time,replace
    }
  },

  // mounted(){
  //   setInterval(()=>{
  //     if(this.time === 2 ){
  //       this.text_typed = 'Back-End'
  //     }
  //     if(this.time === 1 ){
  //       this.text_typed = 'Front-End'
  //       return this.time  = 2
  //     }
  //       this.time -= 1
  //   },4000)
  // }

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
.container_animation{
  display: flex;
  width: 100%;
}
.container_animation .text{
  position: relative;
  color: yellow ;
  font-size: 4rem;
  font-weight: normal;
}
.container_animation .text.first_text{
  color: white;
  padding-right: 24px;
}



/**
Es para solo uso de CSS con un fondo de pantalla del mismo color que el componente 'absolute'
 */
/*.typed-text:before{*/
/*  content: '';*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  height: 100%;*/
/*  width: 100%;*/
/*  background-color: green;*/
/*  border-left: 2px solid blue;*/
/*  animation: animate 4s steps(12) infinite;*/
/*}*/


@keyframes animate {
  40%, 60% {
    left:100%
  }
  100%{
    left: 0%;
  }
}
</style>