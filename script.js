const form = document.querySelector("form");
statusTxt = form.querySelector(".btn-area span");

form.onsubmit = e => {
  e.preventDefault();
  statusTxt.style.display = "block";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      statusTxt.innerText = response;
      if(response.indexOf("Please") != -1 || response.indexOf("Sorry") != -1 ) {
        statusTxt.style.color = "crimson";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}