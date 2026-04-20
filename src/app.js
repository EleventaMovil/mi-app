export function iniciarApp() {
  const config = localStorage.getItem("config");

  if (!config) {
    mostrarFormulario();
  } else {
    iniciarWeb(JSON.parse(config));
  }
}

function mostrarFormulario() {
  document.body.innerHTML = `
    <h2>Configurar servidor</h2>

    <input id="ip" placeholder="IP">
    <input id="puerto" placeholder="Puerto">

    <button onclick="guardar()">Guardar</button>
  `;
}

window.guardar = function () {
  const ip = document.getElementById("ip").value;
  const puerto = document.getElementById("puerto").value;

  const config = {
    server: `http://${ip}:${puerto}`
  };

  localStorage.setItem("config", JSON.stringify(config));
  location.reload();
};

function iniciarWeb(config) {
  const url = config.server;

  document.documentElement.innerHTML = "";

  const iframe = document.createElement("iframe");

  iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = "100vh";
  iframe.style.border = "none";

  document.body.appendChild(iframe);
}