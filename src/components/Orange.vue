<template>
  <div class="orange">
    我是orange的数量: {{num}}
    <button @click="numUp">增加num值</button>
    <Apple/>
  </div>
</template>
<script>
import Apple from './Apple'
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    numUp () {
      this.num++
      // 直接调用mutations的方法(如果不需要异步操作)
      this.$store.commit('TOTAL_UP')
    }
  },
  components: {
    Apple
  }
}
</script>

