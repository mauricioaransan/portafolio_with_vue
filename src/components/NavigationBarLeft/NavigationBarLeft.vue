<template>
<!--  <v-card width="320" color="#040b14" class="navigation_bar_fixed" height="100vh">-->
  <v-card width="320" color="#040b14" class="pl-4 navigation_bar_fixed" height="100vh">
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


    <h2 class="white-color">Mauricio Arancibia Sanchez</h2>

    <v-btn plain block dark large>
      <v-icon left>
        mdi-home
      </v-icon>
        Inicio
    </v-btn>

    <v-btn plain block dark>
      <v-icon left>
        mdi-account
      </v-icon>
      Acerca de mi
    </v-btn>

    <v-btn plain block dark>
      <v-icon left>
        mdi-book-open
      </v-icon>
      Portafolio
    </v-btn>

    <v-btn plain block dark>
      <v-icon left>
        mdi-arrow-top-bold-box-outline
      </v-icon>
      Skills
    </v-btn>

    <v-btn plain block dark>
      <v-icon left>
        mdi-home
      </v-icon>
      Contactame
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

});
</script>







<style>
.navigation_bar_fixed{
  position: fixed;
}


.avatar_img{
  border:   8px solid grey;

}
.white-color{
  color: white;
  text-transform: uppercase;
  text-align: center;
}
.v-btn__content{
  align-items: start !important;
}
.v-btn{
  justify-content: left !important;
  color:#149ddd !important;
}
</style>