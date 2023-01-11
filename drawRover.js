const plateau = document.querySelector(".plateau");



export function drawRover(rover) {
  if (rover.location.length === 3) {
    const rov = document.createElement("div");
    rov.style.gridRowStart = rover.location()[0];
    0;
    rov.style.gridColumnStart = rover.location()[1];
    0;
    rov.classList.add("rover");
    plateau.appendChild(rov);
  }
}
