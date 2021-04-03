<template>
  <div>
      <ul>
        <li v-for="(item, idx) in lists" :key="idx">
          <!-- 内容展示 -->
        </li>
      </ul>
    <div id="loading">加载更多...</div>
  </div>
</template>

<script>
export default {
  name: 'czloadMoreIO',
  props: {
    lists: {
      type: Array,
      default: () => {}
    },
    isLoading: Boolean
  },
  data () {
    return {
      io: null // 监听实例
    }
  },
  methods: {
    loadMore () {
      const _this = this
      const loading = document.getElementById('loading')
      // 当 #load 出现被展示的时候触发的回调
      const callback = function () {
        if (!_this.isLoading) {
          // 通知父组件加载更多
          _this.$emit('load')
        }
      }
      this.io = new IntersectionObserver(callback)
      this.io.observe(loading)
    }
  },
  mounted () {
    this.loadMore()
  },
  boforeDestroy () {
    // 取消监听事件
    this.io = null
  }
}
</script>
