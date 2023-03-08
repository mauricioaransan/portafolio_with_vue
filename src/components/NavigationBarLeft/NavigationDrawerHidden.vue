<template>
  <v-sheet color="black" :width="drawer ? '300' : '0'" height="100vh">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        top
        temporary
        class="hover_side_bar"
        color="#040b14"
    >

       <v-row justify="center" class="ma-0 my-5">
         <v-avatar
             size="135px"
             class="avatar_img"
         >
           <img
               alt="Avatar"
               src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
           >
         </v-avatar>
       </v-row>


       <h2 class="white-color mb-12">Mauricio Arancibia Sanchez</h2>

       <v-sheet
           color="transparent"
           class="nav_card mb-10 pl-4 "
           v-for="(item,i) in items"
           :key="i"
           @click="$vuetify.goTo(`#${item.goto}`)"
       >
         <v-row
             class="ma-0 nav_item"
             style="color: white"
         >
           <v-icon class="mr-8 nav_item_icon" color="white">
             {{ item.icon }}
           </v-icon>
           <span class="nav_item_title">
        {{ item.title }}
      </span>
         </v-row>
     </v-sheet>
    </v-navigation-drawer>
  </v-sheet>

</template>


<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({

  setup(){
    const drawer = ref(false)
    const items = ref([
      {icon: 'mdi-home',                  title:'inicio',       goto:'home'},
      {icon: 'mdi-account',               title:'acerca de mi', goto:'about'},
      {icon: 'mdi-file-document-outline', title:'portafolio',   goto:'portfolio'},
      {icon: 'mdi-tray-arrow-up',         title:'skills',       goto:'skills'},
      {icon: 'mdi-server',                title:'contacteme',   goto:'contactme'},
    ])


    return{
      items,
      drawer
    }
  }
});
</script>


<style>

.hover_side_bar{
  width: 300px !important;
  position: fixed;
}

.avatar_img{
  border:   8px solid grey;

}
.nav_card{
  align-content: center;
}
.nav_item{
  transition: .4s;
  align-content: center;
}
.nav_item:hover, .nav_item:hover .nav_item_icon{
  cursor: pointer;
  color: #2196f3 !important;
  transition: .4s;
}
.nav_item_title{
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
}
.white-color{
  color: white;
  text-transform: uppercase;
  text-align: center;
}
</style>