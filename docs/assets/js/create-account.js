import{Cookie,API_BASE}from"./utils.js";(()=>{const e=document.querySelector("form");e.addEventListener("submit",(function(t){t.preventDefault();let s=new FormData(e);fetch(API_BASE+"create-account/",{method:"POST",body:s,mode:"cors"}).then((e=>{e.json().then((e=>{"OK"===e.status?document.getElementById("success").classList.remove("is-hidden"):"USER_EXISTS"===e.status&&document.getElementById("account-exists").classList.remove("is-hidden")}))}),(e=>{}))}),!1)})();