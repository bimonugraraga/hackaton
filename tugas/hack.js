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
  },
  ""
]

let acak = shuffle(playlist)
acak.push("")
let option = ["tidak1", "tidak2", "tidak3", "tidak4"]

let musik = new Audio()
let index = 0
let count = 0
let totalPoint = 0
let jawaban = 1

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function generateMusic(){
  musik.src = acak[index].song
  musik.play()
}

function nextMusic(){
  
  index++

  musik.src = acak[index].song
  musik.play()

 
  if (index === acak.length -1){
    totalPoint = totalPoint
    alert("HORE\nPoint Anda:" + totalPoint)
    window.location.replace('hack2.html')
  }
}

function getAnswer(){

  let answer = acak[index].title

  let userAnswer = document.getElementById("user-answer").value

  if (!userAnswer){
    alert("Harus diisi")
  } else if (userAnswer.toLowerCase() === answer){
    count = 10
    console.log(answer)
    totalPoint += count
    nextMusic()

  } else {
    alert("Jawaban Salah \n" + "Point : " + totalPoint)
    window.location.replace('hack2.html')
  }
  
  
  console.log(totalPoint, "Answer")
  
}

let countHelp = 2
function help(){

    if (countHelp > 0){
      alert(acak[index].band)
      totalPoint -= 5
      console.log(totalPoint, "Help")
      countHelp--

    } else{
      alert("HELP HABIS")
    }
}


