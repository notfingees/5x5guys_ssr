<template>
  <div class="faq">
    <h2>{{question}}</h2>
    <p v-html="answer"></p>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  props: {
    question: String,
    answer: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    font-family: Futura;
    font-weight: bold;
    font-size: 2vw;
    color: black;
}

p {
    font-family: Futura;
    font-weight: normal;
    font-size: 1vw;
    color: white;
}
</style>
