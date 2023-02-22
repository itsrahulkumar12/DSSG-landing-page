let acc = document.getElementsByClassName("accordion");
let sumbit_btn1 = document.querySelector("#cb_btn");
let sumbit_btn2 = document.querySelector("#cb_btn1");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

sumbit_btn1.addEventListener("click", (e) => {
  e.preventDefault();
});

sumbit_btn2.addEventListener("click", (e) => {
  e.preventDefault();
});
