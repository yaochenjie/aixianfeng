<template>
  <div id="app">
    <!-- <hello-world msg="我是蔡威">
      <h2>我是嵌套的h2</h2>
      <a href="###">我是slot里的a</a>
      <footer slot="foot">我是底部的内容</footer>
      <header slot="head">我是头部的内容</header>
    </hello-world> -->
    <!-- 总数:{{total}}
    <Parent @add="totalUp" />
    <Parent @add="totalUp" />
    <Parent @add="totalUp" />
    <Parent @add="totalUp" /> -->
    {{total}}
    <banana/>
    <banana/>
    <banana/>
    <banana/>
  </div>
</template>

<script>
import Banana from '@/components/Banana'
import Parent from '@/components/Parent'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Parent,
    Banana
  },
  computed: {
    total () {
      // 从vuex中提取state中的total
      return this.$store.state.total
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
