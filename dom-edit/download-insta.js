var isInViewport = function(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.top <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

var imgs = document.getElementsByTagName("img");
var imgSrc = "";

for (var i = 0; i < imgs.length; i++) {
  if (
    isInViewport(imgs[i].parentElement) === true &&
    imgs[i].hasAttribute("srcset") === true &&
    imgs[i].hasAttribute("decoding") === true
  )
    imgSrc = imgs[i].src;
}

imgSrc;
