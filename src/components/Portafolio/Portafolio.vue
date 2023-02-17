<template>
  <v-sheet id="portfolio" >
    <h1 class="mt-5">portaFOLIO</h1>
    <v-row class="px-10 mt-10" justify="center">
      <v-col cols="4" v-for="item in items" >
        <v-hover v-slot="{ hover }">
          <v-img
              :src="item.image"
              height="350"
              width="100%"
          >
            <v-expand-transition>
              <v-sheet
                  outlined
                  elevation="10"
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out "
                  style="height: 100%;"
              >
                  <v-col  align-self="center">
                    <div class="px-4 port_info_title">{{item.title}}</div>
                    <div class="px-4 port_info_content" > {{ item.content }}</div>
                    <v-row justify="center" class="ma-0 pa-0">
                      <botonHover :colorHover="item.color" title="Mas info" />
                    </v-row>
                  </v-col>
              </v-sheet>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import botonHover from "@/components/Buttons/BotonHover.vue";

export default defineComponent ( {
  name: "Portafolio",
  components:{
    botonHover
  },
  setup(){
    const items = ref([
      {
        image:    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
        title:    'Ficha Postulantes',
        content:  'Creación de una Página Web utilizando Vue/TypeScript en la que se registren los postulantes a los puestos de trabajos generados por la organización y queden registrados en su ERP.',
        url:      '',
        color:    '#00eeff'
      },
      {
        image:    'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
        title:    'SynLab',
        content:  'Soporte y mantenimiento a varias páginas pertenecientes al grupo Synlab, donde usando Java/FTL/JS y Vue/TypeScript solucionábamos los errores y realizábamos los nuevos requerimientos de los usuarios.',
        url:      '',
        color:    '#16FA1D'
      },
      {
        image:    'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title:    'Portafolio',
        content:  'Creación de una LandingPage donde mostrar mi información personal y demás características.',
        url:      '',
        color:    '#FA16A8'
      },
      {
        image:    'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title:    'App Altillos',
        content:  'Aplicativo Móvil creado en Flutter/DART como parte del curso de Tesis de la carrera universitaria.',
        url:      '',
        color:    '#1D16FA'
      }
    ])


    return{
      items
    }
  }
})
</script>

<style scoped>
.port_info_title{
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.port_info_content{
  font-size: 17px;
  text-align: justify;
  hyphens: auto;
  margin-bottom: 30px;
}
</style>