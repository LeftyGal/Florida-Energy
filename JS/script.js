function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(29.65, -82.32), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
  
  window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  
    return t;
}(document, "script", "twitter-wjs"));


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


///* chart from API *///
///* Renewable Energy Production*//

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(getData);

      function drawChart(getNewData) {
        console.log("getNewData", getNewData)
         getNewData.unshift(["Year", "Billion BTUs"])
        
       
        
    var data = google.visualization.arrayToDataTable(getNewData);    
          var options = {
          title: 'Renewable Energy Production in Florida',
          chartArea: {width: '50%'},
          hAxis: {
            title: 'BTUs',
            minValue: 0
          }
        };
        
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }


    function getData(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "https://api.eia.gov/series/?api_key=4743ba4e54768007de0b9b2a0cadf0bd&series_id=SEDS.REPRB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
          let theActualData = JSON.parse(request.response).series[0].data

          drawChart(theActualData)
        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }
  
///* Chart 2 *///

function drawtotalconsumption_chart(freshData2) {
  console.log("freshData2", freshData2)
  freshData2.unshift(['Year', 'Total Energy Consumption'])

  var data = google.visualization.arrayToDataTable(freshData2);

  // Chart Options
  var options = {
    title: 'II. Total Annual Electricity Consumption in Florida',
      backgroundColor: '#ffd3b6',
      bold: 'true',
      italic: 'true',
      vAxis: {title: 'Billion Btu'},
      hAxis: {title: 'Year'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };
   
    var chart = new google.visualization.LineChart(document.getElementById('totalconsumption_chart'));
  chart.draw(data, options);
}
  
  function getData2() {

  let request = new XMLHttpRequest()

  let requestUrl = "https://api.eia.gov/series/?api_key=4743ba4e54768007de0b9b2a0cadf0bd&series_id=SEDS.TETCB.FL.A"

  request.open('GET', requestUrl, true)

  request.onload = function () {

    let theActualData2 = JSON.parse(request.response).series[0].data

    drawtotalconsumption_chart(theActualDataTwo)
  }

  request.error = function (errTwo) {
    console.log("error is: ", errTwo)
  }

  request.send()
}

///* vue app *//
var app = new Vue({
  el: '#app',
  data: {
  
  },
  methods: {
    showrenewableenergyproduction: function(){
      console.log("test1 was called")
      document.getElementById("chart_div").innerHTML=""
      drawChart()
    },
    showtotalconsumption: function(){
    console.log("test2 was called")
      document.getElementById("totalconsumption_chart").innerHTML=""
    drawVisualization()
  },
}
})
 