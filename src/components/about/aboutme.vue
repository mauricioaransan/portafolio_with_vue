<template>
<!--  no me gusta esta linea pero es la unica solucion que le veo de momento -->
<v-sheet color="#F8F9F9" :style="$vuetify.breakpoint.mdAndUp ? 'padding-left: 50px' : 'padding-left: 0'">
  <v-card
      height="100vh"
      id="home"
      elevation="0"
      class="d-flex align-center"
      color="transparent"
      img="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"

  >
    <v-col class="justify-center " cols="12">
      <div>
        <p class="personal_name pa-0 mt-16">Mauricio Arancibia Sánchez</p>
      </div>
      <div class="container_animation ">
        <span class="text first_text"> Desarrollador </span>
        <typewriter
            :replace="replace"
            :type-interval="200"
            :replace-interval="1000"
        >
          <span class="text typed-text"> {{text_typed}}</span>
        </typewriter>
      </div>
    </v-col>
  </v-card>

  <v-sheet id="about" class="mt-10 pl-5 pr-5" color="transparent">
    <h1 class="port_title">Acerca de mí</h1>
    <div class="under_line_title"></div>
    <v-row >
      <v-col cols="12" xs="12" sm="12" md="4" lg="6" xl="6" class="about_text_principal">
        <v-sheet width="85%" style="margin: 0 auto" elevation="5" class="pa-5 personal_info_card">
          <span class="about_text_develop">Desarrollador WEB </span>
          <span> con conocimientos en Vue, JS, HTML y CSS,
        además de otros lenguajes como TypeScript y Java.
            porque todavía podemos decir una vez más y querer querenos por silas dudas
        </span>
          <p>
            Me considero una persona con una gran prioridad por la responsabilidad y
            el compromiso por el trabajo, además de tener aptitudes para
            poder desarrollar bajo presión.
          </p>
        </v-sheet>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="8" lg="6" xl="6" >

          <h3 class="port_subtitle">Personal Info</h3>
          <v-row>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" >
              <v-sheet elevation="5" class="pa-5 personal_info_card" style="min-width: 150px !important;" >
                <div> <span class="personal_info_header"> Nombre: </span> <span class="personal_info_info"> Mauricio Arancibia</span> </div>
                <div> <span class="personal_info_header"> Edad: </span> <span class="personal_info_info"> 26 años</span> </div>
                <div> <span class="personal_info_header"> Email: </span> <span class="personal_info_info"> mauricioaransan@gmail.com</span> </div>
                <div> <span class="personal_info_header"> Dirección: </span> <span class="personal_info_info"> Villa el Salvador - Lima </span> </div>
              </v-sheet>
            </v-col>
            <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" >
              <v-sheet elevation="5" class="pa-5 personal_info_card">
                <div> <span class="personal_info_header"> Habilidad: </span> <span class="personal_info_info"> Front-End</span> </div>
                <div> <span class="personal_info_header"> Experiencia: </span> <span class="personal_info_info"> 1 año</span> </div>
                <div> <span class="personal_info_header"> Lenguajes: </span> <span class="personal_info_info"> Español / Ingles (escrito)</span> </div>
                <div> <span class="personal_info_header"> FreeLance: </span> <span class="personal_info_info"> Disponible </span> </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row class="ma-0 mt-5" :class="$vuetify.breakpoint.mdAndDown ? 'justify-center' : 'justify-start'">
            <botonHover colorHover="#2196f3" title="Descargar cv" isDownload='true' />
          </v-row>
      </v-col>
    </v-row>



    <v-sheet
        color="transparent"
        id="experiencie"
        class="ma-0 mt-8"
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
            class="my-5"
        >
          <v-btn
              :class="active ? ' btn_slide_group_activated' : 'btn_slide_group'"
              @click="toggle"
          >
            {{item.title}}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
        <v-scale-transition >
          <v-sheet
              v-if="model === 0"
              tile
              color="transparent"
          >
            <TimeLineExperience/>
          </v-sheet>
        </v-scale-transition>

        <v-scale-transition>
          <v-sheet
              v-if="model === 1"
              tile
              color="transparent"
          >
            <TimeLineEducational/>
          </v-sheet>
        </v-scale-transition>

        <v-scale-transition>
          <v-sheet
              v-if="model === 2"
              tile
              color="transparent"
          >
            <TimeLineAdditional/>
          </v-sheet>
        </v-scale-transition>
    </v-sheet>
  </v-sheet>


  <Portafolio/>

  <v-sheet
      id="skills"
  >
    <Skills/>
  </v-sheet>





  <v-sheet id="contactme">
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
          { from: "Front-End",  to: "Back-End" },
          { from: "Back-End",   to: "Front-End" },
          { from: "Front-End",  to: "Back-End" },
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


})
</script>

<style scoped>

.personal_name{
  font-size: 2.4rem;
  color: white;
  padding-left: 100px !important;
}

.port_title{
  text-transform: uppercase;
  color:  #003785;
  transition: 0.2s;
}
.port_title:hover{
  text-shadow: 0 0 3px #040b14;
  transition: 0.2s;
  cursor:pointer;
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
.btn_slide_group{
  font-size: 20px;
  margin-right: 15px;
  margin-left: 15px;
  font-weight: 600 !important;
  background-color: #616069 !important;
  border: none !important;
  border-radius: 15px;
  color: #b9ffff !important;

}
.btn_slide_group_activated{
  font-size: 20px;
  margin-right: 15px;
  margin-left: 15px;
  font-weight: 600 !important;
  background-color: #040b14 !important;
  border-radius: 15px;
  border: none !important;
  color: #706fd3;
  transition: 0.3s;
  border: 2px solid #282459FF;
  box-shadow: 0 0 0 1px #282459FF;
  animation: anim-shadow .4s ease-out;
}
@keyframes anim-shadow {
  100%{
    box-shadow: 0 0 15px 6px rgb(58,57,110);
  }
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
  padding-left: 100px;
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

</style>