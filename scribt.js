




var imgsContiner = document.querySelector(".imgs");
var allImgs = [
  "gallery1.jpeg",
  "gallery2.jpeg",
  "gallery3.jpeg",
  "gallery4.jpeg",
  "gallery5.jpeg",
  "gallery6.jpeg",
];

for (let i = 0; i < allImgs.length; i++) {
  imgsContiner.innerHTML += `<img src="${allImgs[i]}" alt="" /> `;
}

var Foodelements = document.querySelectorAll(".imgs img");
for (let i = 0; i < Foodelements.length; i++) {
  Foodelements[i].addEventListener("click", () => {
    var pop = document.querySelector(".popup");
    pop.querySelector("img").src = allImgs[i];
    pop.style.display = "flex";
  });
}

var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  var pop = document.querySelector(".popup");
  pop.style.display = "none";
});

















