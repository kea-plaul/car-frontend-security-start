import { renderTemplate, setActive, showPage } from "./utils.js"
import { setupLoginHandlers, logout, updateLoginDependentComponents } from "./js-for-pages/login.js"
import { getAllCars } from "./js-for-pages/seeOurCars.js"
import { setupAddCarHandlers } from "./js-for-pages/addEditCars.js"
import { loadMyDetails } from "./js-for-pages/myDetails.js"


function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id;
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    case "page-see-cars": {
      getAllCars()
      break
    }
    case "page-add-cars": {
      setupAddCarHandlers()
      break
    }
    case "page-my-details": {
      loadMyDetails()
      break
    }
    case "page-login": {
      setupLoginHandlers()
      break
    }
    case "page-logout": {
      logout()
      break
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-about") //Set the default page to render
updateLoginDependentComponents()




