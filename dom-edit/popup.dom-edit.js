$(function() {
  $("#actPwdVis").click(function() {
    chrome.tabs.executeScript({
      code:
        'var inputs = document.getElementsByTagName("input");' +
        "for (var i = 0; i < inputs.length; i++) {" +
        ' if (inputs[i].type.toLowerCase() == "password") {' +
        '   inputs[i].type = "text";' +
        " }" +
        "}"
    });
  });

  $("#actHideImg").click(function() {
    chrome.tabs.executeScript({
      code:
        'var imgs = document.getElementsByTagName("img");' +
        "for (var i = 0; i < imgs.length; i++) {" +
        '   imgs[i].style.cssText = "display:none !important";' +
        "}"
    });
  });
});
