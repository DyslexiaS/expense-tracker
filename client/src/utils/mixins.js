import Vue from 'vue'

// 全站共用的 function，會注入每個 component 當中
Vue.mixin({
  methods: {
    datetimeFormat (date) {
      date = new Date(date)
      return date.toDateString()
    }
  }
})
