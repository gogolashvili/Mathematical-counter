let container = document.createElement("div");
document.body.appendChild(container);
container.style.width = "100vw";
container.style.height = "100vh";
container.style.backgroundColor = "rgb(45, 149, 351)";
container.style.overflow = "auto";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

let box = document.createElement("div");
container.appendChild(box);
box.style.width = "800px";
box.style.height = "500px";
box.style.overflow = "auto";

let time = 10;

let satauri = document.createElement("h1");
box.appendChild(satauri);
satauri.innerHTML = `დარჩენილი დრო: ${time} წმ`;
satauri.style.color = "white";
satauri.style.fontSize = "50px";
satauri.style.marginTop = "30px";
satauri.style.marginLeft = "20%";
