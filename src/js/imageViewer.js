$(document).ready(function() {

  // bind attributes with images.
  var images = $(".blog-images");
  var thumb_img_attr = "data-idx-image";
  images.find("img").each(function (index, el) {
    $(el).attr(thumb_img_attr, index);
  });

  // set total number of images.
  var total_index = $("._total-index");
  total_index.text(getImgLength());
});

function setCurrentImgIndex(img_attr_num) {
  var current_index = $("._current-index");
  current_index.text(parseInt(img_attr_num) + 1);
}

function getImgLength() {
  return $(".blog-images img").length;
}

function showImgIndex() {
  $(".page-nav").show();
}

function hideImgIndex() {
  $(".page-nav").hide();
}

function showImg(image_elem, idx, attr) {
  var src = image_elem.attr("src");
  var slide = $("._img-slide");

  slide.attr("src", src);
  slide.attr(attr, idx); 
  slide.show();
  setCurrentImgIndex(idx);
}
function buttonClick(button) {
  var btn_img_idx = button.attr("data-btn-img");
  var attr = "data-idx-image";
  var image_elem = $("["+attr+"="+btn_img_idx+"]");

  showImg(image_elem, btn_img_idx, attr);
  showImgIndex();
}

$(".blog-images img").click(function () {
  var thumb_img_attr = "data-idx-image";
  var attr_num = $(this).attr(thumb_img_attr);
  var image_elem = $("["+thumb_img_attr+"="+attr_num+"]");
  showImg(image_elem, attr_num, thumb_img_attr);
  showImgIndex();
});

$("#btn-images").on("click", "._btn-image", function() {
  buttonClick($(this));
});

$(".container").keydown(function(e) {

  if(e.key != "ArrowRight" && e.key != "ArrowLeft") {
    return false;
  }

  var display = $("._img-slide").css("display");
  if(display == "none") {
    return false;
  }

  var min_index = 0;
  var max_index = getImgLength() - 1;
  var attr = "data-idx-image";
  var popup_img_attr = $("._img-slide").attr(attr); 
  var attr_value = parseInt(popup_img_attr);
  var next_num = attr_value;

  if(e.key == "ArrowRight") {
    next_num += 1;
    if(next_num > max_index) {
      next_num = 0;
    }
  } else if (e.key == "ArrowLeft"){
    next_num -= 1;
    if(next_num < min_index) {
      next_num = max_index;
    }
  }

  var image_elem = $("["+attr+"="+next_num+"]");
  showImg(image_elem, next_num, attr);
  showImgIndex();
});

$("body").on("click", function(e) {
  $("._img-slide").hide();
  hideImgIndex();
});

$("._btn-image").on("click",function(e){
  buttonClick($(this));

  // To prevent body click delegation
  e.stopPropagation();
});

$("._img-slide").on("click",function(e){
  e.stopPropagation();
});

$(".blog-image").on("click",function(e){
  e.stopPropagation();
});

$('a .prevent').click(function(event) {
    event.preventDefault();
});
