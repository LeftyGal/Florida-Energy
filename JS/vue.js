
var graphs = [
  {name: "renewable",
  },{name: "totalenergy"
  },
]


Vue.component('app-datagraphs', {
 props: ['text'],
 template: ''
})

var app = new Vue({
  el: '#app',
  data: {
    graphs: datagraphs
  },
  methods: {
    test: function(){
      console.log("test was called")
    },
    filter: function(){
      console.log("filter was called")
  
      // if checkbox is checked
      if(document.getElementById("renewable").checked){
        // set this.graphs to only renewableenergy === true
        this.graphs = datagraphs.filter(g => t.renewable)
      } else {
        // both tables
        this.graphs = datagraphs   
             // if checkbox is checked
         if(document.getElementById("totalenergy").checked){
 // set this.graphs to only totalenergy === true
           this.graphs = datagraphs.filter(g => t.totalenergy)
            } else {
        this.graphs = datagraphs
            }
    }
  }
}
})