<template>
  <div class="parent">
    我是子组件的num: {{num}}
    <button @click="numUp">增加num值</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    numUp () {
      this.num++
      // 发射事件(触发事件)
      this.$emit('add')
    }
  }
}
</script>

