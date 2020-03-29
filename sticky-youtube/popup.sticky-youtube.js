$(function() {
  $("#small-player").click(function() {
    embedYoutubePlayer(true);
  });

  $("#large-player").click(function() {
    embedYoutubePlayer(false);
  });
});

function getQueryParam(url, name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.search
  );

  return results !== null ? results[1] || 0 : false;
}

function embedYoutubePlayer(isSmall = true) {
  var url = $("#input-url").val();
  var params = new URLSearchParams(url.slice(url.indexOf("?") + 1));
  if (params.has("v")) {
    var param = params.get("v");
    var videoSrc = "https://youtube.com/embed/" + param;
    var className = "large-frame";
    if (isSmall) {
      className = "small-frame";
    }
    var html =
      '<div class="youtube-mini"><iframe class="' +
      className +
      '" src="' +
      videoSrc +
      '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture"></iframe></div>';

    //todo: remove existing yt player
    //todo: close and minimise button
    chrome.tabs.insertCSS({
      file: "dom.sticky-youtube.css"
    });

    chrome.tabs.executeScript({
      code: "document.body.innerHTML += '" + html + "'"
    });
  }
}
