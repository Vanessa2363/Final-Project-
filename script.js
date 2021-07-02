// to show the drop down menu after clicking 
var dropdownBtn = $('.dropbtn')

dropdownBtn.on("click",myFunction)

function myFunction() {
  $('#myDropdown').toggleClass('show');
}

// to direct users to different pages by clicking on the image buttons
var clothingBtn = $('.clothingbtn')
var accessoriesBtn = $('.accessoriesbtn')
var restaurantsBtn = $('.restaurantsbtn')
var othersBtn = $('.othersbtn')

clothingBtn.on("click",clothingFunction)
accessoriesBtn.on("click",accessoriesFunction)
restaurantsBtn.on("click",restaurantsFunction)
othersBtn.on("click",othersFunction)

function clothingFunction(){
  location.href =  "htmlFiles/clothing.html" 
}
function accessoriesFunction(){
  location.href =  "htmlFiles/accessories.html" 
}
function restaurantsFunction(){
  location.href =  "htmlFiles/restaurants.html" 
}
function othersFunction(){
  location.href = "htmlFiles/others.html"
}

//maps
// function initMap() {
//   var location = {lat: 34.052235, lng: -118.243683};
//   var map = new google.maps.Map(document.getElementById("map"), {
//   zoom: 4,
//   center: location,
//   });
//   var marker = new google.maps.Marker({
//   position: location, 
//   map: map,
//   })
// }

//maps & the marker
function initMap() {
  var location = {lat: 34.052235, lng: -118.243683};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: location,
  });

  var locations = [
    ['MaeMae Jewelry <br>\
    3125 Glendale Blvd, Los Angeles, CA 90039 <br>\
    <a href = "https://goo.gl/maps/9Se6o51iuzTrNY4v6"> Get Directions </a>', 34.116940157132916, -118.26262606023141, "accessories"],
    ['HöMAGE <br>\
    100 N Fair Oaks Ave, Pasadena, CA 91103 <br>\
    <a href = "https://g.page/homagepasadena?share"> Get Directions </a>', 34.147756195941376, -118.15023925837916, "accessories"],
    ['Mondo Mondo <br>\
    5420 Monte Vista St, Los Angeles, CA 90042 <br>\
    <a href = "https://goo.gl/maps/HMiqQCDx2TXVyiWM8"> Get Directions </a>', 34.110139043510735, -118.19766426208301, "accessories"],
    ['Clover Silver Lake <br>\
    2756 Rowena Ave, Los Angeles, CA 90039 <br>\
    <a href = "https://goo.gl/maps/TMyCP6aAwT4yJ9tG7"> Get Directions </a>', 34.10740103128782, -118.26399398721611, "accessories"],
    ['Dotter <br>\
    5027 York Blvd, Los Angeles, CA 90042 <br>\
    <a href = "https://goo.gl/maps/zsCHMegUcL83CZpx8"> Get Directions </a>', 34.121641817794384, -118.20598620441095, "accessories"],
    ['OK the Store <br>\
    8303 West Third Street Los Angeles, CA 90048 <br>\
    <a href = "https://goo.gl/maps/CeAsiKSk7MwbhjZn7"> Get Directions </a>', 34.07323958897865, -118.37035053324811, "accessories"],
    ['OK the Store <br>\
    1716 Silverlake Boulevard Los Angeles, CA 90026 <br>\
    <a href = "https://goo.gl/maps/NbtwdChh9Ku4Qhk88"> Get Directions </a>', 34.0896720701641, -118.26771719700588, "accessories"],
    ['Melody Ehsani <br>\
    424 1/2 N Fairfax Ave, Los Angeles, CA 90036 <br>\
    <a href = "https://goo.gl/maps/JW4fBvZUsxu7vZPD7"> Get Directions </a>', 34.07913279339259, -118.36131560256062, "clothing"],
    ['Whimsy and Row <br>\
    12801 Venice Blvd. Los Angeles CA <br>\
    <a href = "https://goo.gl/maps/DotyzYwhPdNihswy6"> Get Directions </a>',34.00068394432656, -118.44076936023447, "clothing"],
    ['LCD <br>\
    1121 Abbot Kinney Blvd Ste 2 Venice, California 90291 <br>\
    <a href = "https://goo.gl/maps/fRnYXJRuvk1NSDp8A"> Get Directions </a>',33.99191752614582, -118.46968397372679, "clothing"],
    ['LCD <br>\
    1318 E 7th Street, Suite 144 Los Angeles, California 90021 <br>\
    <a href = "https://goo.gl/maps/jKSS9cGdbj9czCfi8"> Get Directions </a>', 34.0350452447722, -118.24124991795341, "clothing"],
    ['Individual Medley Store <br>\
    3176 Glendale Blvd, Los Angeles, CA 90039 <br>\
    <a href = "https://goo.gl/maps/HySpidNNoH8sh5278"> Get Directions </a>', 34.11756570246426, -118.2611464584246, "clothing"],
    ['Di Pillas Italian Restaurant <br>\
    9013 Valley Blvd, Rosemead, CA 91770 <br>\
    <a href = "https://goo.gl/maps/oaHwZDboK2MtJNra9"> Get Directions </a>', 34.08120639992905, -118.07254920075299, "restaurants"],
    ['Blazin Chicks <br>\
    5728 Rosemead Blvd Unit #102, Temple City, CA 91780 <br>\
    <a href = "https://goo.gl/maps/P8VvQ7SsXbbpKMor7"> Get Directions </a>', 34.10481860589702, -118.07326360446035,"restaurants"],
    ['Genever <br>\
    3123 Beverly Blvd, Los Angeles, CA 90057 <br>\
    <a href = "https://goo.gl/maps/MF8x4Nej7L295qNs8"> Get Directions </a>', 34.07249915613376, -118.28295234864265,"restaurants"],
    ['The Sammiche Shoppe <br>\
    222 E Regent St, Inglewood, CA 90301 <br>\
    <a href = "https://goo.gl/maps/2gUXTwQUh7THt92Q7"> Get Directions </a>', 33.96437076570668, -118.35244254493755,"restaurants"],
    ['Fujin Ramen <br>\
    1017 S Glendora Ave West Covina, CA 91790 <br>\
    <a href = "https://goo.gl/maps/Zbq2v7SdrV9WsPV76”> Get Directions </a>', 34.05782463330695, -117.93741173144393,"restaurants"],
    ['HiFi Kitchen <br>\
    1667 Beverly Blvd, Los Angeles, CA 90026 <br>\
    <a href = "https://goo.gl/maps/MxW64ADn9dHSmUxp7"> Get Directions </a>', 34.06468014679044, -118.26500971609863,"restaurants"],
    ['Novas Grill <br>\
    989 W San Bernardino Rd, Covina, CA 91722 <br>\
    <a href = "https://goo.gl/maps/KvLrj3jd44DW7yzR6> Get Directions </a>', 34.08991215483739, -117.90978842958904,"restaurants"],
    ['Pizza of Venice <br>\
    2545 N Fair Oaks Ave, Altadena, CA 91001<br>\
    <a href = "https://g.page/pizzaofvenice?share"> Get Directions </a>', 34.18951650360184, -118.15033170260408,"restaurants"],
    ['Floraland<br>\
    601 E Main St, Alhambra, CA 91801<br>\
    <a href = "https://goo.gl/maps/6xhjiv3ZsS6gLTZR6"> Get Directions </a>', 34.09831063544083, -118.1211373332475,"restaurants"],
    ['Prelude & Dawn<br>\
    5627 N. Figueroa Street Los Angeles, CA 90042<br>\
    <a href = "https://goo.gl/maps/76YBWa6FbqWPrz1m6"> Get Directions </a>', 34.109626862406756, -118.19338014488798,"restaurants"],

    ['Someware <br>\
    4474 W Adams Blvd #203, Los Angeles, CA 90016<br>\
    <a href = "https://goo.gl/maps/d4uVuPpaz1e3Wpjc8"> Get Directions </a>', 34.032571173048574, -118.3375627313977,"restaurants"],

    ['Earth + Element <br>\
    8490 Sunset Blvd, West Hollywood, CA 90069 <br>\
    <a href = "https://goo.gl/maps/f3c6ikV9D6b8KqB28"> Get Directions </a>', 34.09432200570076, -118.37553208536498,"restaurants"]
  ];

  var infowindow =  new google.maps.InfoWindow({});
  var marker, count;
  for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}

// interactive quiz
function submitQuiz() {
  document.getElementById("result").innerHTML = "";
  var answer1 = document.getElementsByName('question1');
  var answer2 = document.getElementsByName('question2');
  var category = "";
  var pricerange = "";
  // stores the selected answers as variables
  for(i = 0; i < answer1.length; i++) {
    if(answer1[i].type="radio") {
      if(answer1[i].checked) {
        category = answer1[i].value
      }
    }
  }
  for (i=0; i < answer2.length; i++) {
    if(answer2[i].type="radio") {
      if (answer2[i].checked) {
        pricerange = answer2[i].value;
      }
    }
  }
  //prints out different statement according to different cases
  if (category == "clothingQuiz" && pricerange == "lowCost") {
    document.getElementById("result").innerHTML = "You should shop at RAGGEDYTIFF and EllyJace!"
  }
  if (category == "clothingQuiz" && pricerange == "mediumCost") {
    document.getElementById("result").innerHTML = "You should shop at Melody Ehsani or Individual Medley!"
  }
  if(category == "clothingQuiz" && pricerange == "highCost") {
    document.getElementById("result").innerHTML = "You should shop at Here:Now, LCD, Whimsy And Row, or Courtyard LA!"
  }
  if(category == "accessoriesQuiz" && pricerange == "lowCost") {
    document.getElementById("result").innerHTML = "You should shop at HöMAGE or Clover Silver Lake!"
  }
  if(category == "accessoriesQuiz" && pricerange == "mediumCost") {
    document.getElementById("result").innerHTML = "You should shop at Maemae Jewelry, Dotter, or Mondo Mondo!"
  }
  if(category == "accessoriesQuiz" && pricerange == "highCost") {
    document.getElementById("result").innerHTML = "You should shop at Carla De La Cruz, White Space, or OK the Store!"
  }
  if(category == "restaurantsQuiz" && pricerange == "lowCost") {
    document.getElementById("result").innerHTML = "You should try HiFi Kitchen, Nova’s Grill, or The Sammiche Shoppe!"
  }
  if (category == "restaurantsQuiz" && pricerange == "mediumCost") {
    document.getElementById("result").innerHTML = "You should try Di Pilla's Italian Restaurant, Blazin Chicks, Genever, or Fujin Ramen!"
  }
  if (category == "restaurantsQuiz" && pricerange == "highCost") {
    document.getElementById("result").innerHTML = "You should try Pizza of Venice!"
  }
  if (category == "otherQuiz" && pricerange == "lowCost") {
    document.getElementById("result").innerHTML = "You should try Someware or A Good Used Book!"
  }
  if (category == "otherQuiz" && pricerange == "mediumCost") {
    document.getElementById("result").innerHTML = "You should try Floraland, Ooga Booga, Prelude & Dawn, or United Other!"
  }
  if (category == "otherQuiz" && pricerange == "highCost") {
    document.getElementById("result").innerHTML = "You should try Uno + Ichi, or Earth + Element!"
  }
}

