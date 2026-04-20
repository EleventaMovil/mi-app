export function iniciarApp() {
  const config = JSON.parse(localStorage.getItem("config"));

  if (!config) {
    mostrarFormulario();
  } else {
    cargarFlask(config);
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

  localStorage.setItem("config", JSON.stringify({
    server: `http://${ip}:${puerto}`
  }));

  location.reload();
};

// 🔥 ESTE ES EL PASO 3 (AQUÍ VA)
function cargarFlask(config) {
  document.open();
  document.write(`
    <html>
      <body style="margin:0;padding:0;overflow:hidden;">
        <iframe 
          src="${config.server}" 
          style="width:100vw;height:100vh;border:none;">
        </iframe>
      </body>
    </html>
  `);
  document.close();
}