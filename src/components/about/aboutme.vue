<template>
<v-sheet >
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
  <v-sheet id="about" class="mt-10 pl-5 pr-5" color="black">


    <h1 class="port_title">Acerca de mí</h1>
    <div class="under_line_title"></div>
    <v-row >
      <v-col md="5" lg="6" xl="6" class="about_text_principal">
        <v-sheet width="85%" style="margin: 0 auto" elevation="5" class="pa-5">
          <span class="about_text_develop">Desarrollador FrontEnd </span>
          <span> con conocimientos en Vue, JS, HTML y CSS,
        además de otros lenguajes como TypeScript y Java.
        Egresado de la carrera de Ingeniería de Sistemas con muchas facilidades de aprendizaje rápido
        y efectivo, con ganas de seguir adquiriendo conocimientos.
        Me considero una persona con una gran prioridad por la responsabilidad y
        el compromiso por el trabajo, además de tener aptitudes para
        poder desarrollar bajo presión.
        </span>
        </v-sheet>
      </v-col>

      <v-col md="7" lg="6" xl="6" >

          <h3 class="port_subtitle">Personal Info</h3>
          <v-row>
            <v-col cols="6">
              <v-sheet elevation="5" class="pa-5 personal_info_card" style="" >
                <div> <span class="personal_info_header"> Nombre: </span> <span class="personal_info_info"> Mauricio Arancibia</span> </div>
                <div> <span class="personal_info_header"> Edad: </span> <span class="personal_info_info"> 26 años</span> </div>
                <div> <span class="personal_info_header"> Email: </span> <span class="personal_info_info"> mauricioaransan@gmail.com</span> </div>
                <div> <span class="personal_info_header"> Dirección: </span> <span class="personal_info_info"> Villa el Salvador - Lima </span> </div>
              </v-sheet>
            </v-col>
            <v-col cols="6">
              <v-sheet elevation="5" class="pa-5 personal_info_card">
                <div> <span class="personal_info_header"> Habilidad: </span> <span class="personal_info_info"> Front-End</span> </div>
                <div> <span class="personal_info_header"> Experiencia: </span> <span class="personal_info_info"> 1 año</span> </div>
                <div> <span class="personal_info_header"> Lenguajes: </span> <span class="personal_info_info"> Español / Ingles (escrito)</span> </div>
                <div> <span class="personal_info_header"> FreeLance: </span> <span class="personal_info_info"> Disponible </span> </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row class="ma-0 mt-5">
            <botonHover colorHover="red" title="Descargar cv"/>
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
import botonHover from "@/components/Buttons/BotonHover.vue"

export default defineComponent({
  name: "aboutme",
  components:{
    Portafolio,
    TimeLineEducational,
    TimeLineAdditional,
    TimeLineExperience,
    Skills,
    ContactMe,
    Typewriter,
    botonHover,
  },

  setup(){
    const colorFromScript = ref('#000')
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
    model,items,text_typed,time,replace,colorFromScript
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

.port_title{
  text-transform: uppercase;
  color:  white;
}
.port_subtitle{
  text-transform: uppercase;
  color: red;
  margin-bottom: 5px;
}

.about_text_principal{
  text-align: justify;
}
.about_text_develop{
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;

}
.personal_info_card{
  border-radius: 20px;
}
.personal_info_header{
  font-weight: bold;
  margin-right: 10px;
}

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