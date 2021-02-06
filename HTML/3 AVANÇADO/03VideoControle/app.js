let video = document.getElementById('video1')
// console.log(video);

function retroceder() {
  video.currentTime -= 15
}

function avancar() {
  video.currentTime += 15
}

function diminuir_v() {
  video.playbackRate -= 0.1
}

function aumentar_v() {
  video.playbackRate += 0.1
}

function play() {
  video.play()
}

function stop() {
  video.pause()
  video.currentTime = 0
}