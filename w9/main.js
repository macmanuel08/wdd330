const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
  output('CONNECTED');
}, false);

function output(message) {
  const para = document.createElement('p');
  para.innerHTML = message;
  outputDiv.appendChild(para);
}

function message(event) {
  event.preventDefault();
  const text = form.message.value;
  output(`SENT: ${text}`);
  connection.send(text);
}

form.addEventListener('submit', message, false);

connection.addEventListener('message', (event) => {
  output(`RESPONSE: ${event.data}`);
  console.log(event.data); // even uses data property to access the returned data
}, false);

connection.addEventListener('close', () => {
  output('DISCONNECTED'); // this event will occur when the connection is close
}, false);

connection.addEventListener('error', (event) => {
output(`<span style='color: red;'>ERROR: ${event.data}</span>`); // Prints the error
}, false);