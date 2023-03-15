<template>
  <v-sheet color="#F8F9F9">
    <v-btn
        to="/"
        color="#149ddd"
        dark
        fixed
        bottom
        right
        fab
    >
      <v-icon size="50">mdi-chevron-left</v-icon>
    </v-btn>
    <h1 class="pt-6 pl-12">Proyectos </h1>

    <v-row v-for="(item,id) in items" :key="id" class="mt-12 mx-7">
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex align-center">
        <v-sheet :id="item.id" elevation="10" class="project_cards">
          <div class="project_title"> {{ item.title }} </div>
          <div v-html="item.content">  </div>
          <h5 class="mt-5">Tecnologias Usadas: </h5>

          <v-row class="ma-0 mt-6" v-if=" id !== 3">
              <v-card  width="40" height="40" v-for="(tech,id) in item.tech" :key="id" class="mx-3 mb-5">
                <v-icon :color="tech.color" size="40">
                  {{tech.icon}}
                </v-icon>
              </v-card>
          </v-row>

          <v-row class="ma-0 mt-6" v-else>
            <v-card width="40" height="40" v-for="(tech,id) in techMobil" :key="id" class="mx-3 mb-5">
              <v-img  :src="tech.icon"></v-img>
            </v-card>
          </v-row>

        </v-sheet>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex align-center">
        <v-carousel v-if="id !== 3" :value="item.model">
          <v-carousel-item
              v-for="(image, i) in item.images"
              :key="i"
          >
            <v-img
                height="100%"
                :src="image"
            >
            </v-img>
          </v-carousel-item>
        </v-carousel>

        <v-slide-group
            v-else
            v-model="model"
            class="pa-4"
            show-arrows
        >
          <v-slide-item
              v-for="(img,id) in item.images"
              :key="id"
              v-slot="{ active, toggle }"
          >
            <v-card
                elevation="0"
                height="600"
                width="300"
                class="ml-5"
                @click="toggle"
            >
              <v-img
                  :src="img"
              >
              </v-img>
            </v-card>

          </v-slide-item>
        </v-slide-group>

      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import goTo from 'vuetify/lib/services/goto'
import {useRoute} from "vue-router/composables";

export default defineComponent({
  name: "ProjectsView",

  setup(){
    const route = useRoute()
    const id = route.query.id
    const model = null

    onMounted(() =>{
      if(id !== undefined) {
        goTo( `#${id}`)
      }
    })

    const items = ref([
      {
        model:      0,
        id:         'ficha',
        title:      'Ficha Postulante',
        content:    '<p>Landing page en el que un usuario registraba su información personal antes de pasar a la entrevista personal que se realizaban en las oficinas.' +
                    ' Dicha ficha era enviada mediante correo electrónico con un TOKEN único para temas de seguridad.</p>' +
                    '<p>Dentro de esta, ya se encontraban registrados los nombres y el DNI del usuario, los demás datos serían registrados manualmente por el usuario.' +
                    ' Se realizaban consumo de varias API internas de la organización para obtener las listas de, por ejemplo, los países, departamentos, provincias y distritos, quienes eran cambiados dinámicamente dependiendo de la selección anterior.</p>' +
                    '<p>Todos estos datos era registrados en la Base de Datos de la empresa, mediante las API post que creábamos.</p>',
        tech:       [
                      {icon:'mdi-vuejs', color:'#3fb27f'},
                      {icon:'mdi-language-typescript', color:'#2f74c0'},
                      {icon:'mdi-vuetify', color:'#aeddff'},
                      {icon:'mdi-nodejs', color:'#539e43'},
                      {icon:'mdi-language-html5', color:'#e44d26'},
                      {icon:'mdi-language-css3', color:'#264de4'},
                      {icon:'mdi-language-javascript', color:'#f7e018'},
                      {icon:'mdi-git', color:'#e84d31'},
                    ],
        images:     [
            'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
            'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        ]
      },
      {
        model:      0,
        id:         'labco',
        title:      'SynLab Medica',
        content:    '<p>Lab médica es una aplicación web que permite a pacientes de hospitales acceder a información sobre sus tratamientos, visitas y prescripciones, y consta de cinco apartados: Covid, HomeCovid, Appointment, Fast PCR y el SynLab. </p>' +
                    '<p>Los primeros cuatro apartados permiten a pacientes, médicos y enfermeras realizar y ver los resultados de pruebas y consultas relacionadas con Covid. </p>' +
                    '<p>SynLab configura los cuatro entornos y controla el acceso de usuarios a hospitales, información, análisis y manipulación de datos de usuarios, doctores, enfermeras y administradores.</p>' +
                    '<p>Como desarrolladores, solucionamos problemas en el entorno web y mejoramos el producto según las peticiones de los usuarios, desde agregar labels en el frontend hasta mejorar la seguridad de ciertas funciones como los captcha.</p>',

        tech:       [
                      {icon:'mdi-vuejs', color:'#3fb27f'},
                      {icon:'mdi-language-typescript', color:'#2f74c0'},
                      {icon:'mdi-vuetify', color:'#aeddff'},
                      {icon:'mdi-nodejs', color:'#539e43'},
                      {icon:'mdi-language-html5', color:'#e44d26'},
                      {icon:'mdi-language-css3', color:'#264de4'},
                      {icon:'mdi-language-javascript', color:'#f7e018'},
                      {icon:'mdi-git', color:'#e84d31'},
                      {icon:'mdi-language-java', color:'#e84d31'},
                    ],
        images:     [
          require("..\\src\\assets\\img_portfolio\\labco\\img1.png"),
          require("..\\src\\assets\\img_portfolio\\labco\\img2.png"),
          require("..\\src\\assets\\img_portfolio\\labco\\img3.png"),
        ]
      },
      {
        model:      0,
        id:         'portfolio',
        title:      'Portafolio',
        content:    'Proyecto personal en el que pondré toda la información personal y académica que me involucra, además de plasmar los proyectos (personales o de trabajo) en los que me he desarrollado. \n' +
                    'Además, servirá como carta de presentación de lo que puedo desarrollar hasta el momento utilizando Vue, HTML, CSS y JavaScript/TypeScript.\n',
        tech:       [
                      {icon:'mdi-vuejs', color:'#3fb27f'},
                      {icon:'mdi-language-typescript', color:'#2f74c0'},
                      {icon:'mdi-vuetify', color:'#aeddff'},
                      {icon:'mdi-nodejs', color:'#539e43'},
                      {icon:'mdi-language-html5', color:'#e44d26'},
                      {icon:'mdi-language-css3', color:'#264de4'},
                      {icon:'mdi-language-javascript', color:'#f7e018'},
                      {icon:'mdi-git', color:'#e84d31'},
                    ],
        images:     [
          require("..\\src\\assets\\img_portfolio\\portFolio\\img1.png"),
          require("..\\src\\assets\\img_portfolio\\portFolio\\img2.png"),
          require("..\\src\\assets\\img_portfolio\\portFolio\\img3.png"),
        ]
      },
      {
        model:      0,
        id:         'appAltillos',
        title:      'Applicativo Altillos',
        content:    '<p> Desarrollé este proyecto académico para el curso de Tesina en la universidad, incluyendo el aplicativo móvil y la documentación requerida para sustentarlo.</p>' +
                    '<p>Se desarrolló un aplicativo móvil para SODIMAC que resolvía la problemática de la ubicación desordenada de productos en los altillos.</p>' +
                    '<p>El aplicativo registraba los movimientos de los productos en los altillos, incluyendo SKU, cantidad y ubicación, permitiendo a los usuarios encontrar los productos de manera fácil y rápida.</p>' +
                    '<p>El aplicativo permitía registrar, modificar y eliminar productos, así como listar los cambios realizados, con el objetivo de mantener un control y reducir errores humanos.' +
                    'También contaba con un apartado de lectura de Código QR con el que se podría mostrar los productos y las cantidades de estos en un solo lugar.</p>' +
                    '<p>Como base de Datos utilicé FireBase, aprovechando el Realtime Database que tienen en sus servicios.</p>',
        tech:       ['Flutter','Dart', 'mdi-firebase'],
        images:     [
          require("..\\src\\assets\\img_portfolio\\altillos\\img1.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img2.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img3.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img4.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img5.jpg"),
          require("..\\src\\assets\\img_portfolio\\altillos\\img6.jpg"),
        ]
      }
    ])

    const techMobil = ref([
      {icon: 'https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png'},
      {icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png'},
      {icon: 'https://img.icons8.com/color/512/firebase.png'},
    ])

    return{
      items,techMobil,model
    }
  }

})
</script>

<style>



.project_cards{
  border-radius: 20px;
  padding: 15px;
}

.project_title{
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 800;

}
</style>