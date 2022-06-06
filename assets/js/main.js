// Musik
const track = document.getElementById("track");
const button = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    button.className = "bi-pause-fill";
  } else {
    track.pause();
    button.className = "bi-play-fill";
  }
}
// Button Music
button.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  button.className = "bi-play-fill";
});

// Initialize and add the map
function initMap() {
  // The location
  const akadNikah = { lat: -0.9225054940582557, lng: 100.35991095174292 };
  const resepsi1 = { lat: -0.9225054940582557, lng: 100.35991095174292 };
  const resepsi2 = { lat: -0.9225054940582557, lng: 100.35991095174292 };
  // The map, centered the location
  const map1 = new google.maps.Map(document.getElementById("akadNikah"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: akadNikah,
  });
  const map2 = new google.maps.Map(document.getElementById("resepsi1"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: resepsi1,
  });
  const map3 = new google.maps.Map(document.getElementById("resepsi2"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: resepsi2,
  });
  // The marker, positioned the location
  const markerAkadNikah = new google.maps.Marker({
    position: akadNikah,
    map: map1,
  });
  const markerResepsi = new google.maps.Marker({
    position: resepsi1,
    map: map2,
  });
  const markerUnduhMantu = new google.maps.Marker({
    position: resepsi2,
    map: map3,
  });
}

// Countdown
// Atur waktu akhir
let countDownDate = new Date("Maret 31, 2022 08:00:00").getTime();

// Update waktu setiap 1 detik
let x = setInterval(function () {
  // dapatkan tanggal dan waktu sekarang
  let now = new Date().getTime();

  // Cari jarak waktu sekarang dengan waktu akhir
  let distance = countDownDate - now;

  // Kalkukalasikan waktu
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days + " Hari";
  document.getElementById("jam").innerHTML = hours + " Jam";
  document.getElementById("menit").innerHTML = minutes + " Menit";
  document.getElementById("detik").innerHTML = seconds + " Detik";
}, 1000);

// Parallax
window.addEventListener("scroll", function () {
  let wScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  const h6 = document.querySelectorAll("#hero .text-description");
  h6.forEach((el) => {
    el.style.transform = `translate(0px, ${wScroll / 13}%)`;
  });

  const coupleContainer = document.querySelectorAll(".couple .container");
  coupleContainer.forEach((el) => {
    if (wScroll > 100) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });

  const waktuContainer = document.querySelectorAll(".waktu .container");
  waktuContainer.forEach((el) => {
    if (wScroll > 750) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });

  const mapContainerRow = document.querySelectorAll(".map .container .row");
  mapContainerRow.forEach((el) => {
    if (wScroll > 1000) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });

  const ayatContainerRow = document.querySelectorAll(".ayat .container .row");
  ayatContainerRow.forEach((el) => {
    if (wScroll > 1700) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });

  const gallery = document.querySelectorAll(".gallery .container");
  gallery.forEach((el) => {
    if (wScroll > 2000) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
});

// Gallery glightbox
const lightbox = GLightbox({
  closeOnOutsideClick: false,
  loop: true,
});
