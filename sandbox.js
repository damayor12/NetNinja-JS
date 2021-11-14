// const a = document.querySelectorAll("p");

// const a = document.querySelectorAll("p");
// console.log(a);

// a.forEach((x) =>
//   x.textContent.includes("success")
//     ? x.classList.add("success")
//     : x.classList.add("error")
// );

// // console.log(a.classList.add("guys"));

// a.classList.remove("error");
// a.classList.add("success");

// // a.style.color = "red";
// a.style.padding = "50px";
// a.style.fontSize = "100px";
// a.style.textAlign = "center";

const ul = document.querySelector("ul");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "bad boy";
  ul.prepend(li);
});

//

// const ul = document.querySelector("ul");
// // ul.remove();

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   //ul.appendChild(li);
//   ul.prepend(li);
// });

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.style.textDecoration = "line-through";
//     // e.target.remove();
//   });
// });

ul.addEventListener("click", (e) => {
  if (e.target.tagName.toUpperCase() == "LI") {
    e.target.style.textDecoration = "line-through";
  }
});

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log('item clicked');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
//     e.target.style.textDecoration = "line-through";
//   });
// });
