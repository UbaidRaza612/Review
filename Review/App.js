console.log("Running");

const data = [
  {
    name: "Ubaid Raza",
    imgSrc: "./Assets/Me.jpg",
    prof: "Frontend developer", 
  },
  {
    name: "M. Shayan",
    imgSrc: "./Assets/img 1.jpg",
    prof: "backend developer",
  },
  {
    name: "M. Umar Sheikh",
    imgSrc: "./Assets/img 2.jpeg",
    prof: "Full strack developer",
  },
];

let img = document.querySelector("img");
let developer = document.querySelector("h2");
let profile = document.querySelector("#profile");

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let showImg = 0;

img.src = data[showImg].imgSrc;
developer.textContent = data[showImg].name.toUpperCase();
profile.textContent = data[showImg].prof.toUpperCase();

//Next Function 

next.addEventListener("click", () => {
  showImg = (showImg + 1) % data.length;
  img.src = data[showImg].imgSrc;
  developer.textContent = data[showImg].name.toUpperCase();
  profile.textContent = data[showImg].prof.toUpperCase();
});


//prev Function

prev.addEventListener("click", () => {
  showImg = (showImg - 1 + data.length) % data.length;
  img.src = data[showImg].imgSrc;
  developer.textContent = data[showImg].name.toUpperCase();
  profile.textContent = data[showImg].prof.toUpperCase();
});
