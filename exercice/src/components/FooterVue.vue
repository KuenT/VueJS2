<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: 'Footer'
    }
  }
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
    /*position: absolute;*/
    bottom: 30px;
    width: 99%;
}
p{
    color:lightgreen;
    text-align:center;
}
</style>