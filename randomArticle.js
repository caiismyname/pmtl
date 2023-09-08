// Define a function to load a random article
function loadRandomArticle(articles) {
  var randomIndex = Math.floor(Math.random() * articles.length);
  var randomArticle = articles[randomIndex];

  // Redirect to the random article's URL
  window.location.href = randomArticle.url;
}

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the list of articles from Jekyll's JSON data file
  fetch("/articles.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var articles = data.collections.articles;

      // Load a random article
      loadRandomArticle(articles);
    })
    .catch(function (error) {
      console.log("Error fetching articles: " + error);
    });
});
