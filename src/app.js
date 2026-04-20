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
  document.body.innerHTML = `<iframe src="${config.server}" style="width:100%;height:100vh;border:none;"></iframe>`;
}