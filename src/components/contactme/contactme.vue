<template>
  <v-sheet color="transparent" class="mt-10 pl-5 pr-5">
    <h1 class="mt-6 mb-3 port_title ">Contacteme</h1>
    <v-row>
      <v-col cols="6" >
        <v-row class="ma-0 d-flex justify-center pt-3" >
          <BtnIcon
              v-for="(item,id) in items"
              :key="id"
              :title="item.title"
              :icon="item.icon"
              :color="item.color"
              :color-hover="item.colorhover"
              :href="item.href"
          />

        </v-row>
      </v-col>
      <v-col cols="6" class="mb-10">
        <div>
          <span class="contact_title">Numero:</span>
          <span class="contact_content">+51 934830545</span>
        </div>
        <div>
          <span class="contact_title">email:</span>
          <span class="contact_content">mauricioaransan@gmail.com</span>
        </div>
        <div>
          <span class="contact_title">direccion:</span>
          <span class="contact_content">Villa el Salvador - Lima - Peru</span>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import BtnIcon from "@/components/Buttons/BtnIcon.vue";

export default defineComponent( {
  name: "contactme",
  components:{
    BtnIcon
  },
  setup(){
    const items = ref([
      {icon: 'mdi-linkedin',    title:'LinkedIn',     color: '#0077B5',   colorhover:'#0077B5',    href: 'https://www.linkedin.com/in/mauricio-aransan/'},
      {icon: 'mdi-instagram',   title:'Instagram',    color: '#e23670',   colorhover:'#e23670',    href: 'https://www.instagram.com/mauricio_arasan/'},
      {icon: 'mdi-whatsapp',    title:'WhatsApp',     color: '#0cc243',   colorhover:'#0cc243',    href: 'https://wa.me/934830545?text=Hola,%20Buen%20Dia%20'},
      {icon: 'mdi-github',      title:'Github',       color: '#000000',   colorhover:'#000000',    href: 'https://github.com/mauricioaransan'},
    ])

    return {
      items
    }
  }
})
</script>

<style scoped>

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

.contact_title{
  line-height: 30px;
  margin-bottom: 45px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
}
.contact_content{
  font-size: 19px;
  line-height: 30px;
  margin-bottom: 45px;

}
</style>