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

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Year', 'Billion Btu'],
         ['1960',  57344],
         ['1961',  62705],
         ['1962',  71216],
         ['1963',  78258],
         ['1964',  87016],
         ['1965', 95878],
         ['1966',108610],
         ['1968', 135509],
         ['1967', 119314],
         ['1968', 135509],
         ['1969', 153032],
         ['1970',171346],
         ['1971',188564],
         ['1972',209665],
         ['1973',237104],
         ['1974',235482],
         ['1975',242096],
         ['1976',252408],
         ['1977',270767],
         ['1978',289031],
         ['1979',295551],
         ['1980',309694],
         ['1981',317921],
         ['1982',315744],
         ['1983',329216],
         ['1984',353246],
         ['1985',379307],
         ['1986',398095],
         ['1987',417862],
         ['1988',444382],
         ['1989',472473],
         ['1990',489741],
         ['1991',499299],
         ['1992',501598],
         ['1993',521176],
         ['1994',544365],
         ['1995',571483],
         ['1996',586291],
         ['1997',597240],
         ['1998',639254],
         ['1999',638966],
         ['2000',668216],
         ['2001',684966],
         ['2002',718136],
         ['2003',741696],
         ['2004',745810],
         ['2005',767622],
         ['2006',778685],
         ['2007',788461],
         ['2008',771702],
         ['2009',766848],
         ['2010',788887],
         ['2011',768009],
         ['2012',752941],
         ['2013',757189],
         ['2014',771379],
         ['2015',803865],
         ['2016',804283],
          
      ]);

    var options = {
      title : 'Electricity Total Consumption in the state of Florida',
      vAxis: {title: 'Billion Btu'},
      hAxis: {title: 'Year'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }




       
  
     