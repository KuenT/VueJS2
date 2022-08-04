<template>
  <div>
    <headerVue></headerVue>
    <!--<app-arbreVue v-bind:arbres="arbres"></app-arbreVue>-->
    <app-arbreVue @messageSent="updateMessage"></app-arbreVue>
    <p>{{ messageToChange }}</p>
    <button v-on:click="changeMessage">Send message from parent to child2</button>
    <app-arbre2Vue :messagetoChange2.sync="messageToChange2"></app-arbre2Vue>
    <footerVue></footerVue>
  </div>
</template>

<script>
import ArbreVue from './components/ArbreVue.vue'
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'
import Arbre2Vue from './components/Arbre2Vue.vue'

export default {
  components: {
    'app-arbreVue' : ArbreVue,
    'headerVue' : HeaderVue,
    'footerVue' : FooterVue,
    'app-arbre2Vue' : Arbre2Vue
  },
  data(){
    return{
      /*arbres: [
        {name: 'ArbreA', height: '101cm'},
        {name: 'ArbreB', height: '102cm'},
        {name: 'ArbreC', height: '103cm'},
        {name: 'ArbreD', height: '104cm'}
      ]*/
      messageToChange: 'No messages'
    }
  },
  methods: {
    updateMessage(payload) {
      this.messageToChange = payload.message
    },
    changeMessage(){
      this.messageToChange2 = ''
    }
  }
}
</script>

<style>

</style>