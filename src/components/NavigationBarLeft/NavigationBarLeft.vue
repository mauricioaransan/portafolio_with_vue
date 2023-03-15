<template>
  <v-hover
    v-slot="{hover}"
  >
    <v-card
        color="#040b14"
        class="navigation_bar_fixed"
        height="100vh"
    >

      <v-navigation-drawer
          permanent
          expand-on-hover
          color="#040b14"
      >
        <v-row v-if="hover" justify="center" class="ma-0 my-5">
          <v-avatar
              size="135px"
              class="avatar_img"
          >
            <img
                alt="Avatar"
                src="..\src\assets\profile_img_medium.jpg"
            >
          </v-avatar>
        </v-row>

        <v-sheet v-else height="258" color="transparent" class="d-flex align-center">
          <v-row  justify="center" class="ma-0 my-5">
            <v-avatar
                size="45px"
                :class="hover ? 'avatar_img' : 'avatar_img_hover'"
            >
              <img

                  alt="Avatar"
                  src="..\src\assets\profile_img_small2.jpg"
              >
            </v-avatar>
          </v-row>
        </v-sheet>

        <v-list-item-title v-if="hover" class="principal_title mb-12">Mauricio Arancibia </v-list-item-title>
        <v-list
            nav
            dense
        >
          <v-list-item
              link
              v-for="(item,i) in items"
              :key="i"
              @click="$vuetify.goTo(`#${item.goto}`)"
              style="margin-bottom: 20px"
              class="nav_item"
          >
            <v-list-item-icon >
              <v-icon class="mr-8 nav_item_icon" color="white">
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title class="nav_item_title"> {{ item.title }} </v-list-item-title>
          </v-list-item>
        </v-list>


      </v-navigation-drawer>

    </v-card>
  </v-hover>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({

  setup(){

  const items = ref([
    {icon: 'mdi-home',                  title:'inicio',       goto:'home'},
    {icon: 'mdi-account',               title:'acerca de mi', goto:'about'},
    {icon: 'mdi-file-document-outline', title:'portafolio',   goto:'portfolio'},
    {icon: 'mdi-tray-arrow-up',         title:'skills',       goto:'skills'},
    {icon: 'mdi-server',                title:'contacteme',   goto:'contactme'},
  ])


    return{
      items
    }
  }
});
</script>







<style>
.navigation_bar_fixed{
  position: fixed;
}


.avatar_img{
  border:   8px solid grey;

}
.avatar_img_hover{
  border:   3px solid grey;

}
.nav_item:hover,
.nav_item:hover .nav_item_icon,
.nav_item:hover .nav_item_title{
  cursor: pointer;
  color: #2196f3 !important;
  transition: .4s;
}
.nav_item_title{
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px !important;
  color: white;
}
.principal_title{
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 23px;
}
.v-btn__content{
  align-items: start !important;
}
.navigation_bar_fixed .v-btn{
  justify-content: left !important;
  color:#149ddd !important;
}
</style>