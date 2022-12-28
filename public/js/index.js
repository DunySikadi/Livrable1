window.addEventListener("DOMContentLoaded", function ($event) {
  var gameList = document.querySelector("#list-game");
  console.log(gameList);
  var input = document.querySelector("#search");
  input.addEventListener("input", function ($event) {
    var value = $event.target.value.toLowerCase();
    axios
      .get("/home/search?str=" + value)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});
