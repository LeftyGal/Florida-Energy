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
        
        
        // function drawBasic(theActualData) {
        //console.log("freshData", freshData)
       // freshData.unshift(["Year", "Billion BTUs"])
        
   // var data = google.visualization.arrayToDataTable();
        
    var data = google.visualization.arrayToDataTable(getNewData);    
          var options = {
          title: 'Renewable Energy Production in Florida',
          chartArea: {width: '50%'},
          hAxis: {
            title: 'BTUs',
            minValue: 0
          }
        };
        
       // var options = {
         // backgroundColor: '#a0d6b4',
        //  bold: 'true',
      //    italic: 'true',
      //    title: 'Renewable energy production Florida',
      //    curveType: 'function',
      //    legend: { position: 'bottom' }
      //  };

       // var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      //  chart.draw(data, options);
    //  }


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
  
   
//* CHART Electricity Total Consumption in the state of Florida *//

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Year', 'Billion Btu'],
          
          ['2016',804283],
           ['2015',803865],
           ['2014',771379],
           ['2013',757189],
           ['2012',752941],
           ['2011',768009],
           ['2010',788887],
           ['2009',766848],
           ['2008',771702],
           ['2007',788461],
           ['2006',778685],
           ['2005',767622],
           ['2004',745810],
           ['2003',741696],
           ['2002',718136],
           ['2001',684966],
           ['2000',668216],
           ['1999',638966],
           ['1998',639254],
           ['1997',597240],
           ['1996',586291],
           ['1995',571483],
           ['1994',544365],
           ['1993',521176],
            ['1992',501598],
            ['1991',499299],
            ['1990',489741],
            ['1989',472473],
            ['1988',444382],
            ['1987',417862],
            ['1986',398095],
            ['1985',379307],
            ['1984',353246],
            ['1983',329216],
            ['1982',315744],
            ['1981',317921],
            ['1980',309694],
            ['1979',295551],
            ['1978',289031],
            ['1977',270767],
            ['1976',252408],
            ['1975',242096],
            ['1974',235482],
            ['1973',237104],
            ['1972',209665],
            ['1971',188564],
            ['1970',171346],
            ['1969',153032],
            ['1968',135509],
            ['1967',119314],
            ['1966',108610],
            ['1965',95878],
            ['1964',87016],
            ['1963',78258],
            ['1962',71216],
            ['1961',62705],
            ['1960',57344],        
      ]);

    var options = {
      backgroundColor: '#ffd3b6',
      bold: 'true',
      italic: 'true',
      title : 'Total Electricity Consumption in Florida',
      vAxis: {title: 'Billion Btu'},
      hAxis: {title: 'Year'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
            
  }

////*  total consumption NEW CHART */////








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
      document.getElementById("curve_chart").innerHTML=""
    drawVisualization()
  },
}
})
 