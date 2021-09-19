const frm = document.querySelector(".form form");
const login = document.querySelector(".submit button");
const bgerror = document.querySelector(".notification");
const error = document.querySelector(".error");

frm.onsubmit = (e)=> {
  e.preventDefault();
}

login.onclick = ()=> {
  let hr = new XMLHttpRequest();
  hr.open("POST", "php/login.php", true);
  hr.onload = ()=> {
    if (hr.readyState === XMLHttpRequest.DONE) {
      if (hr.status === 200) {
        let data = hr.response;
        if (data != "Success") {
          if (data != "Disable") {
            bgerror.style.display = "block";
            error.textContent = data;
            alert("Not disabled");
          }else{
            alert("Disabled");
            login.style.display = "none";
          }
        } else {
          window.location.href = "dashboard.php";
        }
      }
    }
  }
  let frmData = new FormData(frm);
  hr.send(frmData);
}