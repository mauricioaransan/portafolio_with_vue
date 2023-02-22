<template>
  <v-sheet>
<!--    Cosas por mejorar:-->

<!--    Ponerle cargadores (cuando se demore en cargar la pagina)-->
<!--    Responsive-->
<!--    Timelines (aumentar mas informacion)-->
<!--    Acerca de mi (mejorar los cuadros y centrar un poco mas, aumentar mas info)-->
<!--    Home (quitarle el fondo verde)-->
<!--    Hacer el portafolio-->
<!--    Aumentar botones en las informaciones (para que se vean los certificados)-->
    <v-row v-for="(item,id) in items" :key="id" class="mt-12 mx-7">
      <v-col cols="6" class="d-flex align-center">
        <v-sheet :id="item.id" elevation="10" color="red" >
          <div> {{ item.title }} </div>
          <div> {{ item.content }} </div>
          <h5>Tecnologias Usadas: </h5>
          <v-row class="ma-0" v-for="(tech,id) in item.tech" :key="id">
              <v-icon>
                mdi-chevron-right
              </v-icon>
            <span class="ml-4"> {{ tech }} </span>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <v-carousel :value="item.model" style="width: 100%">
          <v-carousel-item
              v-for="(image, i) in item.images"
              :key="i"
          >
            <v-img
                :src="image"
            >
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "ProjectsView",

  setup(){

    const items = ref([
      {
        model:      0,
        id:         'ficha',
        title:      'Ficha Postulante',
        content:    'Landing page en el que un usuario registraba su información personal antes de pasar a la entrevista personal que se realizaban en las oficinas.\n' +
                    'Dicha ficha era enviada mediante correo electrónico con un TOKEN único para temas de seguridad. Dentro de esta, ya se encontraban registrados los nombres y el DNI del usuario, los demás datos serían registrados manualmente por el usuario. \n' +
                    'Se realizaban consumo de varias API internas de la organización para obtener las listas de, por ejemplo, los países, departamentos, provincias y distritos, quienes eran cambiados dinámicamente dependiendo de la selección anterior. \n' +
                    'Todos estos datos era registrados en la Base de Datos de la empresa, mediante las API post que creábamos.\n',
        tech:       ['Vue 2 (composition API)','TypeScript', 'Vuetify', 'NodeJS', 'HTML', 'CSS', 'JavaScript', 'Informix', 'Axios', 'GIT'],
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
        content:    'Es un entorno web donde los usuarios, en este caso pacientes de una red de hospitales, pueden acceder a la información sobre sus tratamientos, sobre sus visitas y sobre sus prescripciones, además de otras características que tiene la aplicación. \n' +
                    'Lab médica cuenta con 5 apartados: Covid, HomeCovid, Appointment, Fast PCR y el SynLab.\n' +
                    'Los primeros cuatro apartados son netamente para los pacientes, para que estos puedan realizar sus consultas sobre lo que se refiere a Covid y sus pruebas. Aquí también tienen acceso los médicos y las enfermeras, quienes son los que realizan los exámenes y las pruebas para poder colgarlas en la página web, permitiendo a los pacientes poder ver los resultados de sus análisis. \n' +
                    'El último entorno, SynLab, es el entorno encargado de la configuración de los otros cuatro entornos, permitiendo que cosas pueden ver o no los usuarios, quienes tienen acceso a ciertos hospitales, quienes pueden acceder a la información, quienes pueden realizar los análisis, la manipulación de la información de los usuarios, doctores, enfermeras y los administradores, etc.\n' +
                    'Nuestro trabajo aquí, como desarrolladores, es darle solución a los problemas que puedan surgir durante la manipulación del entorno web. También brindarle mejoras a esta mediante las peticiones de los usuarios quienes manipulan el producto antes de brindárselo al usuario final. Las peticiones varían desde aumentarle unos labels en el frontend al momento de realizar una consulta, cambiar tablas, agregar columnas, mejorar los triggers o procedures, todo ello en el backend, e incluso mejorar la lógica de los captcha que tienen como seguridad al momento de realizar ciertas labores.\n' +
                    'La diferencia entre los proyectos radica en que los cuatro primeros mencionados están basados en Vue y Vuetify, con TypeScript y ciertas partes de Java, mientras que el proyecto de SynLab está hecho con Java, JavaScript, FTL y HTML, además de ser el más grande y complejo que hay pues engloba muchas características del proyecto general\n',
        tech:       ['Vue 2 (composition API)','TypeScript', 'Vuetify', 'VueX', 'NodeJS', 'HTML', 'CSS', 'JavaScript', 'Informix', 'Axios', 'GIT','JAVA','FTL'],
        images:     [
          'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
          'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        ]
      },
      {
        model:      0,
        id:         'portfolio',
        title:      'Portafolio',
        content:    'Proyecto personal en el que pondré toda la información personal y académica que me involucra, además de plasmar los proyectos (personales o de trabajo) en los que me he desarrollado. \n' +
                    'Además, servirá como carta de presentación de lo que puedo desarrollar hasta el momento utilizando Vue, HTML, CSS y JavaScript/TypeScript.\n',
        tech:       ['Vue 2 (composition API)','TypeScript', 'Vuetify', 'HTML', 'CSS', 'JavaScript', 'GIT'],
        images:     [
          'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
          'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        ]
      },
      {
        model:      0,
        id:         'app',
        title:      'Applicativo Altillos',
        content:    'Proyecto Académico que desarrollé para el curso de Tesina en la Universidad, donde desarrollé tanto el aplicativo móvil como la documentación necesaria para sustentar el proyecto.\n' +
                    'Consta de un aplicativo móvil que serviría como solución a la problemática que en ese momento SODIMAC tenía encima, el cual era la ubicación de sus productos en los altillos, ya que estos no contaban con ningún orden.\n' +
                    'El aplicativo consistía en registrar todo movimiento que se realizase en los altillos, ya sea almacenaje o para venta, o por otros motivos, guardando el SKU, Cantidad y ubicación, con el fin de que todo usuario que contara con el mismo aplicativo, supiera en que lugar de la tienda se encontraba el producto haciendo el mínimo esfuerzo.\n' +
                    'Dentro del aplicativo, podrías registrar nuevos productos, modificar, eliminar y listar los cambios realizados de cada producto, con el fin de mantener un control de los mismo y obtener el mínimo posible de errores humanos (ya que no está automatizado). \n' +
                    'También contaba con un apartado de lectura de Código QR con el que se podría mostrar los productos y las cantidades de estos en un solo lugar.\n' +
                    'Como base de Datos utilicé FireBase, aprovechando el Realtime Database que tienen en sus servicios.\n',
        tech:       ['Flutter','Dart', 'Firebase'],
        images:     [
          'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
          'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        ]
      }
    ])


    return{
      items,
    }
  }

})
</script>

<style>

.v-item-group{
  max-width: 100% !important;
}
</style>