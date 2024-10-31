const progress = document.getElementById("progress");
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const songName = document.getElementById("song-name");
const singer = document.getElementById("singer");

const songs = [
  { name: "Despasito", src: "media/Despacito.mp3", singer: "Luis Fonsi" },
  { name: "Levitating", src: "media/Levitating.mp3", singer: "Dua Lipa" },
  { name: "Ali Baba", src: "media/Ali Baba.mp3", singer: "Adam Ferllo" },
];
let currentSongIndex = 0;

songName.textContent = songs[0].name;
singer.textContent = songs[0].singer;
audio.onloadedmetadata = function () {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
};
function playPause() {
  if (playButton.classList.contains("fa-play")) {
    audio.play();
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
  } else {
    audio.pause();
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
  }
}
nextButton.addEventListener("click", () => {
  if (currentSongIndex == songs.length - 1) {
    currentSongIndex = 0;
  } else {
    currentSongIndex = currentSongIndex + 1;
  }
  audio.src = songs[currentSongIndex].src;
  songName.textContent = songs[currentSongIndex].name;
  singer.textContent = songs[currentSongIndex].singer;
  audio.play();
  playButton.classList.remove("fa-play");
  playButton.classList.add("fa-pause");
});
prevButton.addEventListener("click", () => {
  if (currentSongIndex == 0) {
    currentSongIndex = songs.length - 1;
  } else {
    currentSongIndex = currentSongIndex - 1;
  }
  audio.src = songs[currentSongIndex].src;
  songName.textContent = songs[currentSongIndex].name;
  singer.textContent = songs[currentSongIndex].singer;
  audio.play();
  playButton.classList.remove("fa-play");
  playButton.classList.add("fa-pause");
});
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  if (audio.currentTime === audio.duration) {
    if (playButton.classList.contains("fa-pause")) {
      playButton.classList.remove("fa-pause");
      playButton.classList.add("fa-play");
    }
  }
});
// if (audio.play()) {
//   setInterval(() => {
//     progress.value = audio.currentTime;
//   }, 1000);
// }
progress.onchange = function () {
  audio.currentTime = progress.value;
};
// audio.addEventListener("ended", function () {
//   if (playButton.classList.contains("fa-pause")) {
//     playButton.classList.remove("fa-pause");
//     playButton.classList.add("fa-play");
//   }
// });
