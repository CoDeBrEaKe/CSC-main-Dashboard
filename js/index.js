let form = document.querySelector(".login-card");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  let flag = true;
  let inputs = form.querySelectorAll("input");

  inputs.forEach((i) => {
    if (i.value != "admin" && i.type != "checkbox") {
      console.log(i.validationMessage);
      flag = false;
    }
  });
  if (flag) window.location.href = "./main.html";
});

// Handling ul li images anchor
let links = document.querySelectorAll("ul li img");
links.forEach((img) => {
  img?.addEventListener("click", () => {
    img.nextElementSibling.click();
  });
});
