import loadMore from './src/loadMore.vue'

loadMore.install = Vue => {
  Vue.component(loadMore.name, loadMore)
}

export default loadMore
