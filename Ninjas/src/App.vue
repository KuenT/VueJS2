<template>
 <div>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
  <app-footer v-bind:title="title"></app-footer>
 </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data () {
    return {
      ninjas: [
        {name: 'Ryu', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', specialty: 'Click Events', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
        {name: 'Yoshi', specialty: 'Data Diggin', show: false}
      ],
      title: 'Vue'
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
