
/**
 * 
 * @param {string} method - POST, PUT, DELETE, etc
 * @param {*} body - body (if any)
 * @param {*} addToken - true if token must be added, otherwise leave it 
 * @returns Options object required for fetch 
 */
export function makeOptions(method, body, addToken) {
  const opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    }
  }
  if (addToken) {
    opts.headers.Authorization = "Bearer " + sessionStorage.getItem("token")
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

