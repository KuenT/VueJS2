<template>
    <div>
    <p>{{ messageToChange2 }}</p>
    </div>
</template>

<script>
export default {
    props: [
        "messageSent"
    ],
  data(){
    return {
        messageToChange2: "This is the second child's message"
    }
  }
}

</script>

<style>

</style>
