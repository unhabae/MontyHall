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
    door.src = "media/semiclosed.png";
    setTimeout(opendoor, 800, door);
    const audio = new Audio("media/goat.mp3");
    audio.play();
    kanTrykke = false;

    // Hvilken dør er dette?
    const door_index = Array.from(
      door.parentElement.parentElement.children
    ).indexOf(door.parentElement);
    console.log("Dør nummer", door_index, "VinnerLuke", vinnerLuke);
    if (door_index == vinnerLuke) console.log("DU VANT! DU VANT! ");
  }
}

function opendoor(door) {
  door.src = "media/open.png";
}
