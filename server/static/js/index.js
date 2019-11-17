import './vue.min.js'


var vm = new Vue({
  el: '#app',
  data: {
    test: 111111
  },
  created() {
    console.log(111)
    axios.get('api/porxy/')
      .then(res => {
        console.log(res)
      })
  },
  methods: {

  }
})