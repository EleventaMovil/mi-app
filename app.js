function iniciarApp() {
  const config = localStorage.getItem("config");

  if (!config) {
    mostrarFormulario();
  } else {
    iniciarWeb(JSON.parse(config));
  }
}

function mostrarFormulario() {
  document.getElementById("app").innerHTML = `
    <h2>Configurar conexión</h2>

    <input id="ip" placeholder="IP (ej: 192.168.1.10)">
    <input id="puerto" placeholder="Puerto (ej: 5000)">

    <button onclick="guardar()">Guardar</button>
  `;
}

window.guardar = function() {
  const ip = document.getElementById("ip").value.trim();
  const puerto = document.getElementById("puerto").value.trim();

  if (!ip || !puerto) {
    alert("IP y puerto son obligatorios");
    return;
  }

  const config = {
    server: `http://${ip}:${puerto}`,
    db: ruta
  };

  localStorage.setItem("config", JSON.stringify(config));

  location.reload();
};

function iniciarWeb(config) {
  // ⚠️ IMPORTANTE: NO usar iframe
  window.location.href = config.server;
}

iniciarApp();