// Features ----

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mul(a, b) {
  return a * b;
}

// Calculation ----

let a = document.querySelector("#input-a");
let b = document.querySelector("#input-b");

// console.log(a.value);
// console.log(b.value);

addbtn.addEventListener("click", () => {
  let inta = parseInt(a.value);
  let intb = parseInt(b.value);
  text.innerHTML = `<h2>${add(inta, intb)}</h2>`;
  console.log(add(inta, intb));
});

subbtn.addEventListener("click", () => {
  let inta = parseInt(a.value);
  let intb = parseInt(b.value);
  text.innerHTML = `<h2>${sub(inta, intb)}</h2>`;
  console.log(sub(inta, intb));
});

mulbtn.addEventListener("click", () => {
  let inta = parseInt(a.value);
  let intb = parseInt(b.value);
  text.innerHTML = `<h2>${mul(inta, intb)}</h2>`;
  console.log(mul(inta, intb));
});

divbtn.addEventListener("click", () => {
  let inta = parseInt(a.value);
  let intb = parseInt(b.value);
  text.innerHTML = `<h2>${div(inta, intb)}</h2>`;
  console.log(div(inta, intb));
});

// calc.addEventListener("click", () => {
//   console.log(a.value);
//   console.log(b.value);
// });

// console.log("Samim");
