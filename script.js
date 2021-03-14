chrome.storage.sync.get(["html"], function (result) {
  console.log(result);
  document.getElementById("article_body_markdown").parentElement.innerHTML =
    result.html;
});
