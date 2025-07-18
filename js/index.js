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

// let exportBtn = document.querySelector(".export-btn");
//   exportBtn.addEventListener("click ", () => {
//     console.log("ss");
//     document.querySelector(".export-card").classList.toggle("active");
//  });