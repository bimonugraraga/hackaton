function generateMusic(){
  let playlist = [
    {
      song: "lagu1.mp3",
      title: "ok1",
      band: "band1"
    },
    {
      song: "lagu2.mp3",
      title: "ok2",
      band: "band2"
    },
    {
      song: "lagu3.mp3",
      title: "ok3",
      band: "band3"
    },
    {
      song: "lagu4.mp3",
      title: "ok4",
      band: "band4"
    }
  ]


  let randomIndex = Math.floor(Math.random() * playlist.length)

  let question = playlist[randomIndex]
  let music = new Audio()
  music.src = playlist[randomIndex].song

  console.log(randomIndex)
  let element = document.getElementById("musicContainer")

  music.pause()
  music.play()

}