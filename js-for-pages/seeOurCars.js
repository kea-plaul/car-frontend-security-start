import { SERVER } from "../settings.js"
const URL = SERVER + "/cars"

export function getAllCars() {
  fetch(URL)
    .then(res => res.json())
    .then(cars => {
      makeTable(cars)
    })
    .catch(err => console.error(err))
}

function makeTable(cars) {
  const rows = cars.map(car => `
     <tr>
       <td>${car.id}</td>
       <td>${car.brand}</td>
       <td>${car.model}</td>
       <td>${car.pricePrDay}</td>
     </tr>
  `).join("")
  document.getElementById("all-cars").innerHTML = rows
}
