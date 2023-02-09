<template>
  <v-row>
    <v-col cols="6" >
      <v-row class="ma-0 " >
        <div class="text-center">
          <v-btn
              fab
              class="mx-4 buttons"
              color="grey"
              v-for="item in items"
          >
            <v-icon class="button_icon" color="white">
              {{ item }}
            </v-icon>
          </v-btn>
        </div>
<!--        <v-card color='blue' class="buttons ml-3">-->
<!--          <v-icon class="button_icon">-->
<!--            mdi-linkedin-->
<!--          </v-icon>-->
<!--        </v-card>-->
      </v-row>
    </v-col>
    <v-col cols="6">

      NUMERO
      EMAIL
      'Villa el Salvador'
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent( {
  name: "contactme",

  setup(){
    const items = ref(['mdi-linkedin', 'mdi-instagram', 'mdi-whatsapp'])

    return {
      items
    }
  }
})
</script>

<style scoped>
.buttons{
  position: relative;
  height: 60px;
  width: 60px;
  font-size: 30px;
  border-radius: 50%;
}
.buttons:hover{
  transform: scale(1.1);
  box-shadow: 0 0 25px #d35400;
}

.buttons:hover .button_icon{
  color: #d35400 !important;

}
.button_icon{
  margin: 0 auto;
}
</style>