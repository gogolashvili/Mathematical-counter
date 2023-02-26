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

let part2 = document.createElement("div");
box.appendChild(part2);
part2.style.backgroundColor = "#F3E13D";
part2.style.width = "600px";
part2.style.height = "300px";
part2.style.borderRadius = "30px";
part2.style.marginTop = "60px";
part2.style.marginLeft = "15%";
part2.style.overflow = "auto";
part2.style.display = "flex";
part2.style.flexDirection = "column";
part2.style.justifyContent = "center";
part2.style.alignItems = "center";
part2.style.gap = "30px";
