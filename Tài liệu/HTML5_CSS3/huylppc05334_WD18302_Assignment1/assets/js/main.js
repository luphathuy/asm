if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Trình duyệt không hỗ trợ Geolocation.");
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log("Vị trí của bạn là: " + latitude + ", " + longitude);
}

var index = 1;
changeImage = function () {
  var imgs = ["./assets/img/banner_tong.jpg", "./assets/img/banner_tong2.jpg", "./assets/img/banner_tong3.jpg"];
  document.getElementById('img').src = imgs[index];
  index++;
  if (index == 3) {
    index = 0;
  }
}
setInterval(changeImage, 5000);