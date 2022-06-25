// adsterra popunder
(function () {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "//pl17086594.profitablecpmgate.com/b0/e0/f7/b0e0f7aef3540e5e4e5fbe40b4d9e002.js";
  document.body.append(script);
})();

// adsterra social bar
(function () {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "//pl17383636.profitablecpmgate.com/18/a4/38/18a438b4c9c384a6f2d2033dccccef7b.js";
  document.body.append(script);
})();

// floating ads
(function () {
  let div = document.createElement("div");
  div.id = "fixedban";
  div.style =
    "width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:0;z-index:999;-webkit-transform:translateZ(0);";
  let divA = document.createElement("div");
  let a = document.createElement("a");
  a.id = "close-fixedban";
  a.onclick = 'document.getElementById("fixedban").style.display = "none";';
  a.style = "cursor:pointer";
  let img = document.createElement("img");
  img.src = "https://yess-online.com/close.png";
  img.style = "vertical-align: center;";
  a.append(img);
  divA.append(a);
  let divScript = document.createElement("div");
  divScript.style =
    "text-align:center;display:block;max-width:728px;height:auto;overflow:hidden;margin:auto";

  // INCLUDE ADS CODE HERE
  // adsterra 300x250
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML =
    "atOptions = { 'key': '65da7bd60a8a2aebe3b709920fdc42ef', 'format': 'iframe', 'height': 250, 'width': 300, 'params': {} };";
  let scripts = document.createElement("script");
  scripts.type = "text/javascript";
  scripts.src =
    "//www.displayformatrevenue.com/65da7bd60a8a2aebe3b709920fdc42ef/invoke.js";
  // INCLUDE ADS CODE END

  divScript.append(script);
  divScript.append(scripts);

  // Apppend to div
  div.append(divA);
  div.append(divScript);
  document.body.append(div);
})();
