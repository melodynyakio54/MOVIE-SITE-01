"use strict";

var APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a79f464242289a39554811f04245986d&page=1";
var IMG_PATH = "https://image.tmdb.org/t/p/w1280";
var SEARCHAPI = "https://api.themoviedb.org/3/search/movie?$api_key=41ee980e4b5f05f6693fda00eb7c4fd4$query=";
var main = document.getElementById("section");
var form = document.getElementById("form");
var search = document.getElementById("query");
returnMovies(APILINK);

function returnMovies(url) {
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data.results);
    data.results.forEach(function (element) {
      var div_card = document.createElement("div");
      div_card.setAttribute("class", "card");
      var div_row = document.createElement("div");
      div_row.setAttribute("class", "row");
      var div_column = document.createElement("div");
      div_column.setAttribute("class", "column");
      var image = document.createElement("img");
      image.setAttribute("class", "thumbnail");
      image.setAttribute("id", "image");
      var title = document.createElement("title");
      title.setAttribute("id", "title");
      var center = document.createElement("center");
      title.innerHTML = "${element.title}";
      image.src = IMG_PATH + element.poster_path;
      center.appendChild(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);
      main.appendChild(div_row);
    });
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  main.innerHTML = "";
  var searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});