<template>
  <div class="hello">
    <!-- 具名的slot -->
    <slot name="head"></slot>
    <h1>{{ msg }}</h1>
    <slot name="foot"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
