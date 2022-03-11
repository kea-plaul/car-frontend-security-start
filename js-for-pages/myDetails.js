import { SERVER } from "../settings.js"
import { makeOptions } from "../fetchUtils.js"
const URL = SERVER + "/members/fromtoken/user"

export function loadMyDetails() {
  fetch(URL, makeOptions("GET", null, true))
    .then(res => res.json())
    .then(details => {
      document.getElementById("detail-username").innerText = details.username
      document.getElementById("detail-email").innerText = details.email
      document.getElementById("detail-firstname").innerText = details.firstName
      document.getElementById("detail-lastname").innerText = details.lastName
      document.getElementById("detail-street").innerText = details.street
      document.getElementById("detail-city").innerText = details.city
      document.getElementById("detail-zip").innerText = details.zip
    })
}