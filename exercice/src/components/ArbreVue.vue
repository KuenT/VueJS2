<template>
  <div id="arbres">
    <ul>
      <li v-for="(arbre, index) in arbres" :key="index">
      <!--<li v-for="arbre in arbres">-->
        <h2>{{index + 1}}. {{ arbre.name }}</h2><br />
        <h3>Taille : {{ arbre.height }}</h3>
      </li>
    </ul>
    <h2>Arbre</h2>
    <button @click="sendMessage">Send message from child1 to parent</button>
  </div>
</template>

<script>
export default {
  /*props: {
    arbres: {
      type: Array,
      required: true
    }
  },*/
  data(){
    return {
      arbres: [
        {name: 'ArbreA', height: '101cm'},
        {name: 'ArbreB', height: '102cm'},
        {name: 'ArbreC', height: '103cm'},
        {name: 'ArbreD', height: '104cm'}
      ]
    }
  },
  methods: {
    sendMessage: function() {
      this.$emit('messageSent',
        {
          message: "This is the first child's message!"
        })
    }
  }
    /*
    feuilles: [
      {name: 'feuilleA', size: '19cm', color: 'rouge'},
      {name: 'feuilleB', size: '20cm', color: 'vert'},
      {name: 'feuilleC', size: '21cm', color: 'jaune'},
      {name: 'feuilleD', size: '22cm', color: 'bleu'}
    ]*/
}
</script>

<style>
#arbres{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 400px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
