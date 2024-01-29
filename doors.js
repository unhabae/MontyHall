// Om vi bare vil la brukeren trykke én gang:
let kanTrykke = true;
const vinnerLuke = Math.floor(Math.random() * 3);

/* Finn alle våre dører og add event listener til dem */
doors = document.querySelectorAll(".openclose");
for (let i = 0; i < doors.length; i++) {
  const door = doors[i];
  door.addEventListener("click", klikkdor);
}
/* Den "raske" måten å gjøre det på: 
  document.querySelectorAll('.openclose').forEach(item => {
    item.addEventListener('click', klikkdor)
  })  */

function klikkdor(event) {
  if (kanTrykke) {
    const door = event.target;
    let vinner = false

    // la brukeren trykke en eller flere ganger: kanTrykke = false;

    // Hvilken dør er dette?
    // const door_index = Array.from(      door.parentElement.parentElement.children    ).indexOf(door.parentElement);
    // Eller ved å bruke data-index property:
    const door_index = door.parentElement.dataset.index
    console.log("Dør nummer", door_index, "VinnerLuke", vinnerLuke);
    if (door_index == vinnerLuke) {
      vinner = true
      document.getElementById("outputText").innerHTML = "DU VANT! DU VANT!" 
      const prizeBilde = door.parentElement.querySelector(".prize")
      prizeBilde.src = "media/ferrari.png"
      prizeBilde.style.width = "80%"

    }

    // Åpne døra "litt"
    door.src = "media/semiclosed.png";
    setTimeout(opendoor, 800, door);
    // Spill lyden med en gang 
    let audio = null 
    if (vinner) {
      audio = new Audio("media/success.mp3");
    } else {
      audio = new Audio("media/goat.mp3");
    }
    audio.play();

  }
}

function opendoor(door, vinner) {
  // Åpne døra helt
  door.src = "media/open.png";
}
