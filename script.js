const brickModel = document.querySelectorAll(".brick-model");
let active = 1;

let togglemodel = document.querySelector(".toggle__modelone");

let tooglemodelTwo = document.querySelector(".tooglemodel2");
const submit = document.querySelectorAll(".submit");

const brickslip = document.getElementById("brick-slip");
brickslip.classList.add("hidden");
const brickround = document.getElementById("brick-round");
const toogleBg = document.querySelector(".tooglebtn");
// close button
const closeBtn = document.querySelectorAll(".close__button");
const result = document.querySelector(".result__area");
const resulttoogleone = document.querySelector(".result__toogle1");
const resultogletwo = document.querySelector(".result__toggle2");
let sqmtr = 0;
let totalBricks = 0;
let Boxnumber = 0;
const buy = document.querySelectorAll(".buy__button");
let totalbox = 0;
let heightnew = 0;

//  eventlisteners
// rounding function
let roundfun = function (num) {
  if (!Number.isInteger(num)) {
    c = Math.floor(num);
    c += 0.5;
    if (num > c) {
      c += 0.5;
      return c.toFixed(2);
    } else {
      return c;
    }
  } else {
    return num.toFixed(2);
  }
};
// round function
function roundHalf(num) {
  return Math.round(num * 2) / 2;
}
//buyfun
let buyfun = function () {
  console.log((document.location = "https://mybrickwall.co.uk/"));
};
let applyone = function () {
  // applying the text content
  
  document.querySelector(".metre").textContent = sqmtr;
  document.querySelector(".number").textContent = totalBricks;
  document.querySelector(".boxes").textContent = Boxnumber;
};
//close function
let close = function () {
  result.classList.remove("hiddenresult");
};
// submit function
let submitfun = function () {
  var height2 = document.getElementById("height2").value;

  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  heightnew = height2;
  if ((!width || !height) && !height2) {
    console.log("hello");
    // alert area
    // alert("please enter height and width");
    close();
  } else {
    console.log(width);
    result.classList.add("hiddenresult");

    if (active) {
      resulttoogleone.classList.remove("result__hidden");
      resultogletwo.classList.add("result__hidden");
      sqmtr = width * height;
      //  sqmtr = roundfun(sqmtr)

      // if first condition
      if (document.getElementById("check1").checked) {
        let wastage = (sqmtr * 10) / 100;
        sqmtr += wastage;
      }
      // if (document.getElementById("check2").checked) {
      //   totalBricks += 15;
      // }
      console.log(sqmtr);
      sqmtr = roundfun(sqmtr);
      console.log(sqmtr);
      Boxnumber = sqmtr / 0.5;
      console.log (Boxnumber)
      Boxnumber = Math.ceil(Boxnumber);
      totalBricks = Boxnumber *28

      applyone();
    } else {
      // // console.log(height2);
      height2 = Number(height2);
      console.log(height2);
      console.log(typeof height2);

      // height2 = height2.toFixed(2);
      // heightnew = roundHalf(height2);
      // console.log(heightnew);
      heightnew = roundfun(height2);
      console.log(heightnew);
      totalbox = Math.ceil(height2 / 0.5);
      // console.log(sqmtr);
      // console.log(Boxnumber);
      resulttoogleone.classList.add("result__hidden");
      resultogletwo.classList.remove("result__hidden");
      document.querySelector(".metre2").textContent = heightnew;
      document.querySelector(".number2").textContent = totalbox;
    }
  }
};
let brickcalc = function () {
  toogleBg.classList.add("toogle-bg1");
  toogleBg.classList.remove("tooglebg2");
  togglemodel.classList.remove("hidden-toggle");
  tooglemodelTwo.classList.add("hidden-toggle");
  active = active === 1 ? 0 : 1;
};
let brickrcalc = function () {
  toogleBg.classList.add("tooglebg2");
  toogleBg.classList.remove("toogle-bg1");

  console.log("hello");
  togglemodel.classList.add("hidden-toggle");
  tooglemodelTwo.classList.remove("hidden-toggle");
  active = active === 1 ? 0 : 1;
};

brickslip.addEventListener("click", brickcalc);
brickround.addEventListener("click", brickrcalc);

for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", close);
}
for (i = 0; i < submit.length; i++) {
  submit[i].addEventListener("click", submitfun);
  // submit[i].addEventListener("click", function submitButtonClick(event) {
  //   event.preventDefault();
  // });
}
for (i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", buyfun);
}
// function round(value, step) {
//   step || (step = 1.0);
//   var inv = 1.0 / step;
//   return Math.round(value * inv) / inv;
// }
// console.log( round(2.15,1.5))
// //faq
